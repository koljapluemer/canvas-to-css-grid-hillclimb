import type { ParameterEdgeStartCardinalPreference, CardinalDirection } from "@/types";

// array with as many elements as the nrOfEdges
// for each, randomly choose a cardinal direction to try to start the edge
// values are VALID cardinal directions
export function generateParameterEdgeStartCardinalPreferences(nrOfEdges: number): ParameterEdgeStartCardinalPreference {
    return Array.from({ length: nrOfEdges }, () => {
        const directions: CardinalDirection[] = ["N", "E", "S", "W"];
        return directions[Math.floor(Math.random() * directions.length)];
    });
}
