import { useStudyStore } from "../../../study/StudyModel";
import { ActionEdge } from "../../schemas";
import { useModelStore } from "../../Model";
import { TextEditPrompt } from "./TextEditPrompt";

export class RewriteFromVisual extends TextEditPrompt {
    constructor() {
        super();
        useStudyStore.getState().logEvent("REWRITE_FROM_VISUAL_PROMPT", {});
    }

    getPrompt(): string {
        const entities = useModelStore.getState().entityNodes.map(e => e.data.name).join(", ");

        const getActionDescription = (actionEdge: ActionEdge) => {
          const sourceEntity = useModelStore.getState().entityNodes.find(entity => entity.id === actionEdge.source);
          const targetEntity = useModelStore.getState().entityNodes.find(entity => entity.id === actionEdge.target);
  
          return `${sourceEntity?.data.name} ${actionEdge.data?.name} ${targetEntity?.data.name} [${actionEdge.data?.sourceLocation}]`;
      }

        const actionEdges = useModelStore.getState().actionEdges;
        const currentActionOrder = actionEdges.map((actionEdge, index) => `${(index+1)}) ` + getActionDescription(actionEdge)).join("\n");


        return `Write a simple and short story involving these characters: ${entities}. The story should follow this sequence of events [location of the scene indicated in brackets]: ${currentActionOrder}`;
    }

    onPartialResult(result: string): void {
        useModelStore.getState().setTextState([{children: [{text: result}]}], true, false);
    }

    canBeExecuted(): boolean {
        // Can only be executed when there are at least some entities and actions
        return useModelStore.getState().entityNodes.length > 0;
    }

}