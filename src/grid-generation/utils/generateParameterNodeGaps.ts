import type { ParameterNodeGaps } from "@/types";

// array with as many elements as the nrOfNodes
// each value stands for the gap between the node at the same index and the node at previous index
// values are whole numbers between 1 and 10
export function generateParameterNodeGaps(nrOfNodes: number): ParameterNodeGaps {
    return Array.from({ length: nrOfNodes }, () => Math.floor(Math.random() * 9) + 1);
}


