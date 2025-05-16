// pick nodes according to their priority
// place the first node on 1/1 (top left, once from the corner)
// scale it according to the ParameterNodeSize relating to the node
// place the next node in the same row, if it fits. see position of previous node, + its width + the gap of the current node
// if it doesn't fit, place it into the next row (in this case, interpret gap as vertical gap)
// make sure that if you scale nodes, that they do not overlap nodes that may already poke down to the right of them

import type { GridGenerationProps } from "@/grid-generation/types";
import type { Grid, Cell } from "../types";
import type { Node } from "@/open-json-canvas-utils/readInCanvas";

export function fillGridWithNodes(grid: Grid, props: GridGenerationProps, nodes: Node[]): Grid {
    // marry nodes to ParameterNodePlacementPrios
    // ParameterNodePlacementPrios is an array, which means that the first element is the priority of the first node, the second element is the priority of the second node, etc.
    const nodesSortedByPriority = nodes.sort((a, b) => props.nodePlacementPrios[nodes.indexOf(a)] - props.nodePlacementPrios[nodes.indexOf(b)]);

    // Start at position 1,1 (one cell from corner)
    let currentRow = 1;
    let currentCol = 1;

    // Track the maximum height of nodes in each row to prevent overlaps
    const rowHeights: number[] = [];

    nodesSortedByPriority.forEach((node, nodeIndex) => {
        const nodeSize = props.nodeSize[nodeIndex];
        const nodeGap = props.nodeGaps[nodeIndex];

        // Check if node fits in current row
        const nodeWidth = nodeSize.width;
        const nodeHeight = nodeSize.height;

        // If node doesn't fit in current row, move to next row
        if (currentCol + nodeWidth > grid[0].length) {
            currentRow += (rowHeights[currentRow] || 0) + nodeGap;
            currentCol = 1;
            rowHeights[currentRow] = 0;
        }

        // Place node in grid
        for (let row = currentRow; row < currentRow + nodeHeight; row++) {
            for (let col = currentCol; col < currentCol + nodeWidth; col++) {
                if (row < grid.length && col < grid[0].length) {
                    grid[row][col] = {
                        type: 'node',
                        subType: node.type,
                        node: node
                    };
                }
            }
        }

        // Update row height if this node is taller
        rowHeights[currentRow] = Math.max(rowHeights[currentRow] || 0, nodeHeight);

        // Move to next position
        currentCol += nodeWidth + nodeGap;
    });

    return grid;
}