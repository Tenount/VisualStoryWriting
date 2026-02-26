import { useStudyStore } from "../../../study/StudyModel";
import { Entity } from "../../schemas";
import { useModelStore } from "../../Model";
import { TextEditPrompt } from "./TextEditPrompt";

export class ChangePropertyPrompt extends TextEditPrompt {
    entity: Entity;
    propertyName: string;
    previousValue: number;
    newValue: number;

    constructor(entity : Entity, propertyName : string, previousValue : number, newValue : number) {
        super();
        this.entity = entity;
        this.propertyName = propertyName;
        this.previousValue = previousValue;
        this.newValue = newValue;
        useStudyStore.getState().logEvent("CHANGE_PROPERTY_PROMPT", { entity: entity.name, propertyName: propertyName, previousValue: previousValue, newValue: newValue });
    }

    getPrompt(): string {
        const adj = this.propertyName.toLowerCase();
        return `${useModelStore.getState().text}\n\nOn a scale from 1 being low ${adj} and 10 being high ${adj}, ${this.entity.name}'s ${adj} is currently a ${this.previousValue}. Slightly rewrite the story so that the ${adj} of ${this.entity.name} becomes a ${this.newValue}`;
    }
}