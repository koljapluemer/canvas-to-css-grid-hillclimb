import type { GridGenerationProps } from "@/grid-generation/types";
import type { Grid } from "./types";
import type { Node } from "@/open-json-canvas-utils/readInCanvas";
import { getGridDataStructureForCellSize } from "./utils/getGridDataStructureForCellSize";
import { fillGridWithNodes } from "./utils/fillGridWithNodes";

export function renderGrid(props: GridGenerationProps, nodes: Node[], screenWidth: number, screenHeight: number): Grid {
    // First, create the grid structure based on cell size
    const grid = getGridDataStructureForCellSize(props.cellSize, screenWidth, screenHeight);
    
    // Then fill it with nodes
    return fillGridWithNodes(grid, props, nodes);
}
