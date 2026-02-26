import { useStudyStore } from "../../../study/StudyModel";
import { Entity } from "../../schemas";
import { TargettedTextEditPrompt } from "./TargettedTextEdit";

export class RemoveEntityPrompt extends TargettedTextEditPrompt {
    entity: Entity;

    constructor(entity : Entity) {
        super();
        this.entity = entity;
        useStudyStore.getState().logEvent("REMOVE_ENTITY_PROMPT", {entity: entity.name});
    }

    getGlobalPrompt(text: string): string {
        return `${text}\n\nRewrite the story so that there is no "${this.entity.name}"`;
    }

    getTargettedPrompt(precedingText: string, textToModify: string, followingText: string): string {
        return `${precedingText} TEXT_TO_REWRITE ${followingText}\n\nTEXT_TO_REWRITE: ${textToModify}\n\nRewrite TEXT_TO_REWRITE so that there is no "${this.entity.name}"`;
    }
}