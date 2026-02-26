import { z } from "zod";
import { CreateEntityNode } from "../../../view/entityActionView/EntityNodeComponent";
import { LayoutUtils } from "../../LayoutUtils";
import { EntityNode, useModelStore } from "../../Model";
import { JSONPrompt } from "../utils/JSONPrompt";
import entitiesPrompt from '../entities.md?raw';

const ENTITY_SCHEMA = z.object({
    entities: z.array(z.object({
        name: z.string(),
        emoji: z.string(),
        properties: z.array(z.object({
            name: z.string(),
            value: z.number()
        }))
    }))
});


export function extractedEntitiesToNodeEntities(extractedData: z.infer<typeof ENTITY_SCHEMA>) : EntityNode[] {
    return extractedData.entities.map((entity, index) => CreateEntityNode(entity, index)); 
}


export function EntitiesExtractor(text : string, center: {x: number, y: number}) : Promise<EntityNode[]> {
    const prompt = entitiesPrompt.replace('{text}', text);

    const entityExtractor = new JSONPrompt({ prompt:  prompt}, ENTITY_SCHEMA)
    useModelStore.getState().setEntityNodes([]);

    entityExtractor.onPartialResponse = (partialResult) => {
        const newEntities = extractedEntitiesToNodeEntities(partialResult.result);
        const oldEntities = useModelStore.getState().entityNodes;

        // Reuse the position of the entities that already existed
        const entities = newEntities.map((newEntity) => {
            const oldEntity = oldEntities.find(e => e.data.name === newEntity.data.name);
            if (oldEntity && oldEntity.position) newEntity.position = oldEntity.position;
            if (oldEntity && oldEntity.measured) newEntity.measured = oldEntity.measured;

            return newEntity;
        });
        
        useModelStore.getState().setEntityNodes(entities);
        LayoutUtils.optimizeNodeLayout("entity", entities, useModelStore.getState().setEntityNodes, {x: center.x, y: center.y}, 120);
    }

    return new Promise((resolve, reject) => {
        entityExtractor.execute().then((result) => {
            console.log("Extracted entities:", result.result.entities);
            resolve(useModelStore.getState().entityNodes);
        })
    });
}
