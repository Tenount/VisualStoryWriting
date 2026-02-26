import { useStudyStore } from "../../../study/StudyModel";
import { Entity } from "../../schemas";
import { TargettedTextEditPrompt } from "./TargettedTextEdit";

export class AddActionPrompt extends TargettedTextEditPrompt {
    source : Entity;
    target : Entity;
    newAction : string;

    constructor(source : Entity, target : Entity, newAction : string) {
        super();
        this.source = source;
        this.target = target;
        this.newAction = newAction;
        useStudyStore.getState().logEvent("ADD_ACTION_PROMPT", {source: source.name, target: target.name, newAction: newAction});
    }

    getGlobalPrompt(text: string): string {
        return `${text}

SOURCE: ${this.source.name}
TARGET: ${this.target.name}

Rewrite the story so that SOURCE also ${this.newAction} TARGET`;
    }

    getTargettedPrompt(precedingText: string, textToModify: string, followingText: string): string {
        return `${precedingText} <blank> ${followingText}

        <blank>: ${textToModify}
SOURCE: ${this.source.name}
TARGET: ${this.target.name}

Rewrite <blank> to add that SOURCE also ${this.newAction} TARGET.\n\n<blank>: `;
    }
}