import { useStudyStore } from "../../../study/StudyModel";
import { Action, Entity } from "../../schemas";
import { TargettedTextEditPrompt } from "./TargettedTextEdit";

export class RemoveActionPrompt extends TargettedTextEditPrompt {
    source : Entity;
    target : Entity;
    action : Action;

    constructor(source : Entity, target : Entity, action : Action) {
        super();
        this.source = source;
        this.target = target;
        this.action = action;
        useStudyStore.getState().logEvent("REMOVE_ACTION_PROMPT", {source: source.name, target: target.name, action: action.name});
    }

    getGlobalPrompt(text: string): string {
        return `${text}

SOURCE: ${this.source.name}
TARGET: ${this.target.name}
ACTION: ${this.action.name}

Rewrite the story so that SOURCE does not do ACTION to TARGET`;
    }

    getTargettedPrompt(precedingText: string, textToModify: string, followingText: string): string {
        return `${precedingText} TEXT_TO_REWRITE ${followingText}

SOURCE: ${this.source.name}
TARGET: ${this.target.name}
ACTION: ${this.action.name}
TEXT_TO_REWRITE: ${textToModify}

Rewrite TEXT_TO_REWRITE so that SOURCE does not do ACTION to TARGET`;
    }
}