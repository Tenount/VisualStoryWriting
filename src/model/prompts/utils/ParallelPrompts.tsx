import { BasePrompt } from "./BasePrompt";



export class ParallelPrompts<O> extends BasePrompt<O[]> {
    prompts: BasePrompt<O>[];
    constructor(prompts: BasePrompt<O>[]) {
        super();
        this.prompts = prompts;
    }

    async runSequentiallyWithDelay() {
        const results = [];
        for (let i = 0; i < this.prompts.length; i++) {
            try {
                const result = await this.prompts[i].execute();
                results.push(result);
                console.log(`ParallelPrompts: Sentence ${i + 1} processed successfully`);
            } catch (e) {
                console.error(`ParallelPrompts: Sentence ${i + 1} failed:`, e);
                results.push(null); // Continue with null result
            }
            //await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
        }
        return results;
    }

    execute(): Promise<O[]> {
        return this.runSequentiallyWithDelay();
        //return Promise.all(this.prompts.map(prompt => prompt.execute()));
    }
}