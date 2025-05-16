import type { ParameterCellSize, ParameterEdgeStartCardinalPreference, ParameterEdgePlacementPrios, ParameterNodeGaps, ParameterNodePlacementPrios, ParameterNodeSize, ParameterEdgeEndCardinalPreference } from "@/types";

export type GridGenerationProps = {
    cellSize: ParameterCellSize;
    nodePlacementPrios: ParameterNodePlacementPrios;
    nodeGaps: ParameterNodeGaps;
    nodeSize: ParameterNodeSize[];
    edgePlacementPrios: ParameterEdgePlacementPrios;
    edgeStartCardinalPreferences: ParameterEdgeStartCardinalPreference;
    edgeEndCardinalPreferences: ParameterEdgeEndCardinalPreference;
}