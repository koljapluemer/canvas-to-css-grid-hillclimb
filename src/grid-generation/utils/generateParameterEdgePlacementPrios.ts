import type { ParameterEdgePlacementPrios } from "@/types";

// array with as many elements as the nrOfEdges
// each value stands for the prio of the edge at the same index
// values are between 0 and 1
export function generateParameterEdgePlacementPrios(nrOfEdges: number): ParameterEdgePlacementPrios {
    return Array.from({ length: nrOfEdges }, () => Math.random());
}
