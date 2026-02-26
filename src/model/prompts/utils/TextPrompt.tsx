import { openai, useModelStore, isOpenAIConfigured } from "../../Model";
import { BasePrompt, ExecutablePrompt, PromptResult } from "./BasePrompt";

const ERROR_NOT_CONFIGURED = "OpenAI is not configured. Please set OPENAI_BASE_URL, OPENAI_MODEL, and API key in .env or URL.";

export class TextPrompt extends BasePrompt<PromptResult<string>> {
    prompt: ExecutablePrompt;
    onPartialResponse: null | ((partialResult : PromptResult<string>) => void);
    constructor(prompt: ExecutablePrompt) {
        super();
        this.prompt = prompt;
        this.onPartialResponse = null
    }

    execute(): Promise<PromptResult<string>> {
        return new Promise<PromptResult<string>>((resolve, reject) => {
            
            (async () => {
                if (!isOpenAIConfigured()) {
                    console.error(ERROR_NOT_CONFIGURED);
                    reject(new Error(ERROR_NOT_CONFIGURED));
                    return;
                }

                const { openAIModel, openAITemperature } = useModelStore.getState();
                const stream = await openai.chat.completions.create({
                  model: this.prompt.model || openAIModel,
                  messages: [{ role: 'user', content: this.prompt.prompt }],
                  temperature: openAITemperature,
                  stream: true,
                });
                let response = '';
                for await (const chunk of stream) {
                  response += chunk.choices[0]?.delta?.content || '';
                  if (this.onPartialResponse) {
                    this.onPartialResponse({ result: response });
                  }

                }        
                resolve({ result: response });  
              })();
            
        });
    }
}
