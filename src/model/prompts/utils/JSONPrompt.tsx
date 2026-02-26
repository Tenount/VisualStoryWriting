import { zodResponseFormat } from 'openai/helpers/zod';
import { Allow, parse } from "partial-json";
import { ZodObject, z } from "zod";
import { useStudyStore } from "../../../study/StudyModel";
import { openai, useModelStore, isOpenAIConfigured } from "../../Model";
import { BasePrompt, ExecutablePrompt, PromptResult } from "./BasePrompt";

const ERROR_NOT_CONFIGURED = "OpenAI is not configured. Please set OPENAI_BASE_URL, OPENAI_MODEL, and API key in .env or URL";


export class JSONPrompt<T> extends BasePrompt<PromptResult<T>> {
  prompt: ExecutablePrompt;
  schema: z.ZodType<T>;
  optionalSchema: ZodObject<any> | null;
  onPartialResponse: null | ((partialResult: PromptResult<T>) => void);

  constructor(prompt: ExecutablePrompt, schema: z.ZodType<T>) {
    super();
    this.prompt = prompt;
    this.schema = schema;
    this.optionalSchema = null;
    this.onPartialResponse = null;
  }

  getDefaultValue(field: z.ZodTypeAny): any {
    if (field instanceof z.ZodString) {
      return '';
    } else if (field instanceof z.ZodNumber) {
      return 0;
    } else if (field instanceof z.ZodBoolean) {
      return false;
    } else {
      // Default fallback for other types (e.g., ZodUnion, ZodEnum)
      return null;
    }
  };


  addMissingFields(partialResponse: any, schema: z.ZodType): any {
    const emptyObject = (schema as any as z.ZodObject<any>).shape;

    const filledData = Object.keys(emptyObject).reduce((acc, key) => {
      if (emptyObject[key] instanceof z.ZodObject) {
        acc[key] = this.addMissingFields(partialResponse[key] || {}, emptyObject[key]);
      } else if (emptyObject[key] instanceof z.ZodArray) {
        acc[key] = (partialResponse[key] || []).map((item: any) => this.addMissingFields(item, emptyObject[key].element));
      } else {
        acc[key] = partialResponse.hasOwnProperty(key) ? partialResponse[key] : this.getDefaultValue(emptyObject[key]);
      }
      return acc;
    }, {} as Record<string, z.ZodTypeAny>);


    return filledData;
  }

  partialParse(response: string): T | null {
    try {
      // Partial parse
      let partialResponse = parse(response, ~Allow.STR);
      // Try adding missing values to the partial response using sensible defaults
      return this.schema.parse(this.addMissingFields(partialResponse, this.schema)); // Should add the missing fields
    } catch (e) {
      // Do nothing if we could not parse the partial response
      /*if (e instanceof z.ZodError) {
        console.log(e.issues);
      }
      console.error("Partial parse error for ", response, e);*/
    }
    return null;
  }


  execute(): Promise<PromptResult<T>> {
    return new Promise<PromptResult<T>>((resolve, reject) => {
      (async () => {
        if (!isOpenAIConfigured()) {
          console.error(ERROR_NOT_CONFIGURED);
          reject(new Error(ERROR_NOT_CONFIGURED));
          return;
        }

        useStudyStore.getState().logEvent("PROMPT_TO_EXECUTE", { prompt: this.prompt.prompt });
        const { openAIModel, openAITemperature } = useModelStore.getState();
        const stream = await openai.chat.completions.create({
          model: this.prompt.model || openAIModel,
          messages: [{ role: 'user', content: this.prompt.prompt }],
          stream: true,
          temperature: openAITemperature,
          response_format: zodResponseFormat(this.schema, "response"),
        });

        let response = '';

        for await (const chunk of stream) {
          response += chunk.choices[0]?.delta?.content || '';
          if (this.onPartialResponse) {
            const partialResult = this.partialParse(response);
            if (partialResult) {
              this.onPartialResponse({ result: partialResult });
            }
          }
        }
        useStudyStore.getState().logEvent("PROMPT_EXECUTED", { prompt: this.prompt.prompt, response: response });
        this.onPartialResponse = null; // Reset the partial response callback     
        
        // Try to parse the response, fall back to partial result if failed
        try {
          resolve({ result: JSON.parse(response) as T });
        } catch (e) {
          // If JSON.parse fails, try to use the last valid partial result
          const partialResult = this.partialParse(response);
          if (partialResult) {
            resolve({ result: partialResult });
          } else {
            reject(new Error("Failed to parse model response as JSON"));
          }
        }
      })();
    });
  }
}
