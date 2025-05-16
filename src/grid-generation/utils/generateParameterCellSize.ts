import type { ParameterCellSize } from "@/types";

export function generateParameterCellSize(screenWidth: number, screenHeight: number, nrOfNodes: number, nrOfEdges: number): ParameterCellSize {
    // return a random value
    // minimum: whichever is higher: 
    // screenWidth / nrOfNodes, or screenHeight / nrOfNodes
    // maximum: nrOfNodes + nrOfEdges * 2
    const min = Math.max(screenWidth / nrOfNodes, screenHeight / nrOfNodes);
    const max = nrOfNodes + nrOfEdges * 2;
    return Math.floor(Math.random() * (max - min + 1)) + min
}
