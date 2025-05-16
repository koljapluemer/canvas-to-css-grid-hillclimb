import type { ParameterCellSize } from "@/types";

export function generateParameterCellSize(screenWidth: number, screenHeight: number, nrOfNodes: number, nrOfEdges: number): ParameterCellSize {
    // return a random value
    // at minimum, the cell size needed if we assume we need to cram in all nodes and all edges next to each other on the screen width or screen height (whichever is smaller)
    // at maximum, the cell size needed if we assome we need only the number of nodes next to each other on the screen width or screen height (whichever is bigger)
    const nrNodesAndEdges = nrOfNodes + nrOfEdges * 2;
    const min = Math.min(screenWidth / nrNodesAndEdges, screenHeight / nrNodesAndEdges);
    const max = Math.max(screenWidth / nrOfNodes, screenHeight / nrOfNodes);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
