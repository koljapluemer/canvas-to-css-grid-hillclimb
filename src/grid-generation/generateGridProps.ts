// pulls all the parameters from the utils
// then uses them to generate a grid

import type { ParameterCellSize, ParameterNodePlacementPrios, ParameterNodeGaps, ParameterNodeSize, ParameterEdgePlacementPrios, ParameterEdgeEndCardinalPreference, ParameterEdgeStartCardinalPreference } from "@/types";
import { generateParameterCellSize } from "./utils/generateParameterCellSize";
import { generateParameterNodePlacementPrios } from "./utils/generateParameterNodePlacementPrios";
import { generateParameterNodeGaps } from "./utils/generateParameterNodeGaps";
import { generateParameterNodeSize } from "./utils/generateParameterNodeSize";
import { generateParameterEdgePlacementPrios } from "./utils/generateParameterEdgePlacementPrios";
import { generateParameterEdgeStartCardinalPreferences } from "./utils/generateParameterEdgeStartCardinalPreferences";
import { generateParameterEdgeEndCardinalPreferences } from "./utils/generateParameterEdgeEndCardinalPreferences";

type GenerateGridProps = {
    cellSize: ParameterCellSize;
    nodePlacementPrios: ParameterNodePlacementPrios;
    nodeGaps: ParameterNodeGaps;
    nodeSize: ParameterNodeSize[];
    edgePlacementPrios: ParameterEdgePlacementPrios;
    edgeStartCardinalPreferences: ParameterEdgeStartCardinalPreference;
    edgeEndCardinalPreferences: ParameterEdgeEndCardinalPreference;
}

export function generateGridProps(nrOfNodes: number, nrOfEdges: number, screenWidth: number, screenHeight: number): GenerateGridProps {
    return {
        cellSize: generateParameterCellSize(screenWidth, screenHeight, nrOfNodes, nrOfEdges),
        nodePlacementPrios: generateParameterNodePlacementPrios(nrOfNodes),
        nodeGaps: generateParameterNodeGaps(nrOfNodes), 
        nodeSize: generateParameterNodeSize(nrOfNodes),
        edgePlacementPrios: generateParameterEdgePlacementPrios(nrOfEdges),
        edgeStartCardinalPreferences: generateParameterEdgeStartCardinalPreferences(nrOfEdges),
        edgeEndCardinalPreferences: generateParameterEdgeEndCardinalPreferences(nrOfEdges)
    }
}

