import type { ParameterNodeSize } from "@/types";

// array with as many elements as the nrOfNodes
// each value stands for the size of the node at the same index
// values are between 1 and 10 (whole numbers)
export function generateParameterNodeSize(nrOfNodes: number): ParameterNodeSize[] {
    return Array.from({ length: nrOfNodes }, () => ({
        width: Math.floor(Math.random() * 9) + 1,
        height: Math.floor(Math.random() * 9) + 1
    }));
}

