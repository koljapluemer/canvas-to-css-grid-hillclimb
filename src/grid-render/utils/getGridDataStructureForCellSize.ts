
import type { Cell, Grid } from "../types";

export function getGridDataStructureForCellSize(cellSize: number, screenWidth: number, screenHeight: number): Grid {
    const nrOfColsThatFitInScreenWidth = Math.floor(screenWidth / cellSize);
    const nrOfRowsThatFitInScreenHeight = Math.floor(screenHeight / cellSize);

    const grid: Grid = [];
    for (let i = 0; i < nrOfRowsThatFitInScreenHeight; i++) {
        const row: Cell[] = [];
        for (let j = 0; j < nrOfColsThatFitInScreenWidth; j++) {
            row.push({ type: 'empty', subType: '' });
        }
        grid.push(row);
    }
    return grid;
}