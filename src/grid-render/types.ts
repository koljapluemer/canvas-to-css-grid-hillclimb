import type { Node } from "@/open-json-canvas-utils/readInCanvas";

export type Cell = {
    type: 'node' | 'edge' | 'empty'
    subType: string
    node?: Node
}

export type Grid = Cell[][]