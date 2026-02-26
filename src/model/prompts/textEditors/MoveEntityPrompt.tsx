import { useStudyStore } from "../../../study/StudyModel";
import { SpatialEntity } from "../../../view/locationView/LocationsEditor";
import { Location } from "../../schemas";
import { useModelStore } from "../../Model";
import { TargettedTextEditPrompt } from "./TargettedTextEdit";

export class MoveEntityPrompt extends TargettedTextEditPrompt {
    entity: SpatialEntity;
    location: Location;

    constructor(entity : SpatialEntity, location : Location) {
        super();
        this.entity = entity;
        this.location = location;
        useStudyStore.getState().logEvent("MOVE_ENTITY_PROMPT", {entity: entity.name, location: location.name});
    }

    isUnkwownLocation(): boolean {
        return this.location.name === "unknown";
    }

    getGlobalPrompt(text: string): string {
        return `${text}\n\nRewrite the story so that "${this.entity.name}" ${this.isUnkwownLocation() ? "" : "never goes to the \"" + this.entity.location + "\" but instead"} goes to the "${this.location.name}"`;
    }

    getTargettedPrompt(precedingText: string, textToModify: string, followingText: string): string {
        return `${precedingText} TEXT_TO_REWRITE ${followingText}\n\nTEXT_TO_REWRITE: ${textToModify}\n\n"` + 
        (this.isUnkwownLocation() ? "" : `${this.entity.name}" is currently located in the "${this.location.name}". `) + 
        `Rewrite TEXT_TO_REWRITE so that it is clear that "${this.entity.name}" is located in the location "${this.location.name}"`;
    }

    execute(): void {
        super.execute();

        // Update our model to match the new location
        const actionSelection = useModelStore.getState().filteredActionsSegment;
        const actionEdges = useModelStore.getState().actionEdges;
        const startIdx = actionSelection? actionSelection.start : 0;
        const endIdx = actionSelection? actionSelection.end : actionEdges.length;

        for (let idx = startIdx; idx < actionEdges.length; idx++) {
            const action = actionEdges[idx];
            const sourceNode = useModelStore.getState().entityNodes.find(entity => entity.id === action.source);
            const targetNode = useModelStore.getState().entityNodes.find(entity => entity.id === action.target);

            if (idx >= endIdx) {
                // We only continue until finding the first mention of the entity that is in a different location than the one we are changing
                if (sourceNode && sourceNode.data.name === this.entity.name && action.data?.sourceLocation !== this.entity.location ||
                    targetNode && targetNode.data.name === this.entity.name && action.data?.targetLocation !== this.entity.location) {
                    break;
                }
            }

            // Update all the actions that had the entity at the old location
            if (action.data?.sourceLocation === this.entity.location) {
                if (sourceNode && sourceNode.data.name === this.entity.name) {
                    action.data.sourceLocation = this.location.name;
                }
            }

            if (action.data?.targetLocation === this.entity.location) {
                if (targetNode && targetNode.data.name === this.entity.name) {
                    action.data.targetLocation = this.location.name;
                }
            }
        }

        useModelStore.getState().setActionEdges(actionEdges);
    }
}