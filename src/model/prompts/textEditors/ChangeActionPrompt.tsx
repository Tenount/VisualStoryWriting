import { useStudyStore } from "../../../study/StudyModel";
import { Action, Entity } from "../../schemas";
import { useModelStore } from "../../Model";
import { TargettedTextEditPrompt } from "./TargettedTextEdit";

export class ChangeActionPrompt extends TargettedTextEditPrompt {
    source: Entity;
    target: Entity;
    previousAction: Action;
    newAction: Action;

    constructor(source: Entity, target: Entity, previousAction: Action, newAction: Action) {
        super();
        this.source = source;
        this.target = target;
        this.previousAction = previousAction;
        this.newAction = newAction;
        useStudyStore.getState().logEvent("CHANGE_ACTION_PROMPT", { source: source.name, target: target.name, previousAction: previousAction.name, newAction: newAction.name });
    }

    isTargetted(): boolean {
        return true; // An action is always targetted... We know exactly where it happened
    }

    splitTextBasedOnSelection(): { precedingText: string, textToModify: string, followingText: string } | null {
        const actionMatch = useModelStore.getState().textActionMatches.filter((match) => match.action.passage === this.previousAction.passage)[0];
        if (actionMatch) {
            const precedingText = useModelStore.getState().text.slice(0, actionMatch.start);
            const textToModify = useModelStore.getState().text.slice(actionMatch.start, actionMatch.end);
            const followingText = useModelStore.getState().text.slice(actionMatch.end);

            return { precedingText, textToModify, followingText };
        }

        return null;
    }

    getGlobalPrompt(text: string): string {
        return `${text}

SOURCE: ${this.source.name}
TARGET: ${this.target.name}
PREVIOUS: ${this.previousAction.name}
NEW: ${this.newAction.name}

Rewrite the story so that SOURCE does NEW instead of PREVIOUS`;
    }

    getTargettedPrompt(precedingText: string, textToModify: string, followingText: string): string {
        return `${precedingText} TEXT_TO_REWRITE ${followingText}

TEXT_TO_REWRITE: ${textToModify}
SOURCE: ${this.source.name}
TARGET: ${this.target.name}
PREVIOUS: ${this.previousAction.name}
NEW: ${this.newAction.name}

Rewrite TEXT_TO_REWRITE so that SOURCE does NEW instead of PREVIOUS`;
    }
}