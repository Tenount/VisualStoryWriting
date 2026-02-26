import { z } from "zod";
import { CreateLocatioNode } from "../../../view/locationView/LocationNodeComponent";
import { LayoutUtils } from "../../LayoutUtils";
import { LocationNode, useModelStore } from "../../Model";
import { JSONPrompt } from "../utils/JSONPrompt";
import locationsPrompt from '../locations.md?raw';

const LOCATION_SCHEMA = z.object({
    locations: z.array(z.object({
        name: z.string(),
        emoji: z.string(),
        /*properties: z.array(z.object({
            name: z.string(),
            value: z.number()
        }))*/
    }))
});

export function extractedLocationsToNodeLocations(extractedData: z.infer<typeof LOCATION_SCHEMA>) : LocationNode[] {
    return extractedData.locations.map((location, index) => CreateLocatioNode(location, index)); 
}


export function LocationExtractor(text : string, center: {x: number, y: number}) : Promise<LocationNode[]> {
    const prompt = locationsPrompt.replace('{text}', text);

    const locationExtractor = new JSONPrompt({ prompt:  prompt}, LOCATION_SCHEMA)
    useModelStore.getState().setLocationNodes([]);

    locationExtractor.onPartialResponse = (partialResult) => {
        const newLocations = extractedLocationsToNodeLocations(partialResult.result);
        const oldLocations = useModelStore.getState().locationNodes;

        // Reuse the position of the locations that already existed
        const locations = newLocations.map((newLocation) => {
            const oldLocation = oldLocations.find(e => e.data.name === newLocation.data.name);
            if (oldLocation && oldLocation.position) newLocation.position = oldLocation.position;
            if (oldLocation && oldLocation.measured) newLocation.measured = oldLocation.measured;

            return newLocation;
        });

        
        useModelStore.getState().setLocationNodes(locations);
        LayoutUtils.optimizeNodeLayout("location", locations, useModelStore.getState().setLocationNodes, {x: center.x, y: center.y}, 120);
    }

    return new Promise((resolve, reject) => {
        locationExtractor.execute().then((result) => {
            console.log("Extracted locations:", result.result);
            resolve(useModelStore.getState().locationNodes);
        })
    });
}
