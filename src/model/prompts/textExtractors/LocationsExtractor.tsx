import { z } from "zod";
import { CreateLocatioNode } from "../../../view/locationView/LocationNodeComponent";
import { LayoutUtils } from "../../LayoutUtils";
import { LocationNode, LocationResponseSchema } from "../../schemas";
import { useModelStore } from "../../Model";
import { JSONPrompt } from "../utils/JSONPrompt";
import locationsPrompt from '../locations.md?raw';

// Using LocationSchema from SSOT

export function extractedLocationsToNodeLocations(extractedData: z.infer<typeof LocationResponseSchema>) : LocationNode[] {
    return extractedData.locations.map((location, index) => CreateLocatioNode(location, index)); 
}


export function LocationExtractor(text : string, center: {x: number, y: number}) : Promise<LocationNode[]> {
    // isExtracting is managed by VisualWritingInterface
    const prompt = locationsPrompt.replace('{text}', text);

    const locationExtractor = new JSONPrompt({ prompt:  prompt}, LocationResponseSchema)
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
        }).catch((e) => {
            reject(e);
        });
    });
}
