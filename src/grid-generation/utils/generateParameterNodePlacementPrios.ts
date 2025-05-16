import type { ParameterNodePlacementPrios } from "@/types";
// generate an array with as many elements as the nrOfNodes
// each element is a random number between 0 and 1
// each array value stands for the prio of the node at the same index
export function generateParameterNodePlacementPrios(nrOfNodes: number): ParameterNodePlacementPrios {
    return Array.from({ length: nrOfNodes }, () => Math.random());
}
