// Types for Open JSON Canvas spec 1.0
type CanvasColor = string; // Can be hex color or preset color (1-6)

interface BaseNode {
  id: string;
  type: 'text' | 'file' | 'link' | 'group';
  x: number;
  y: number;
  width: number;
  height: number;
  color?: CanvasColor;
}

interface TextNode extends BaseNode {
  type: 'text';
  text: string;
}

interface FileNode extends BaseNode {
  type: 'file';
  file: string;
  subpath?: string;
}

interface LinkNode extends BaseNode {
  type: 'link';
  url: string;
}

interface GroupNode extends BaseNode {
  type: 'group';
  label?: string;
  background?: string;
  backgroundStyle?: 'cover' | 'ratio' | 'repeat';
}

type Node = TextNode | FileNode | LinkNode | GroupNode;

interface Edge {
  id: string;
  fromNode: string;
  fromSide?: 'top' | 'right' | 'bottom' | 'left';
  fromEnd?: 'none' | 'arrow';
  toNode: string;
  toSide?: 'top' | 'right' | 'bottom' | 'left';
  toEnd?: 'none' | 'arrow';
  color?: CanvasColor;
  label?: string;
}

interface Canvas {
  nodes: Node[];
  edges: Edge[];
}

/**
 * Reads and parses an Open JSON Canvas file
 * @param jsonString - The JSON string content of the canvas file
 * @returns A parsed Canvas object with proper typing
 * @throws Error if the JSON is invalid or doesn't match the spec
 */
export function readCanvas(jsonString: string): Canvas {
  try {
    const data = JSON.parse(jsonString);
    
    // Validate basic structure
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid canvas: root must be an object');
    }
    
    if (!Array.isArray(data.nodes)) {
      throw new Error('Invalid canvas: nodes must be an array');
    }
    
    if (!Array.isArray(data.edges)) {
      throw new Error('Invalid canvas: edges must be an array');
    }

    // Validate nodes
    data.nodes.forEach((node: any, index: number) => {
      if (!node.id || typeof node.id !== 'string') {
        throw new Error(`Invalid node at index ${index}: missing or invalid id`);
      }
      if (!node.type || !['text', 'file', 'link', 'group'].includes(node.type)) {
        throw new Error(`Invalid node at index ${index}: missing or invalid type`);
      }
      if (typeof node.x !== 'number' || typeof node.y !== 'number' ||
          typeof node.width !== 'number' || typeof node.height !== 'number') {
        throw new Error(`Invalid node at index ${index}: missing or invalid position/size`);
      }

      // Validate type-specific properties
      switch (node.type) {
        case 'text':
          if (!node.text || typeof node.text !== 'string') {
            throw new Error(`Invalid text node at index ${index}: missing or invalid text`);
          }
          break;
        case 'file':
          if (!node.file || typeof node.file !== 'string') {
            throw new Error(`Invalid file node at index ${index}: missing or invalid file`);
          }
          if (node.subpath && (typeof node.subpath !== 'string' || !node.subpath.startsWith('#'))) {
            throw new Error(`Invalid file node at index ${index}: invalid subpath`);
          }
          break;
        case 'link':
          if (!node.url || typeof node.url !== 'string') {
            throw new Error(`Invalid link node at index ${index}: missing or invalid url`);
          }
          break;
        case 'group':
          if (node.label && typeof node.label !== 'string') {
            throw new Error(`Invalid group node at index ${index}: invalid label`);
          }
          if (node.background && typeof node.background !== 'string') {
            throw new Error(`Invalid group node at index ${index}: invalid background`);
          }
          if (node.backgroundStyle && !['cover', 'ratio', 'repeat'].includes(node.backgroundStyle)) {
            throw new Error(`Invalid group node at index ${index}: invalid backgroundStyle`);
          }
          break;
      }
    });

    // Validate edges
    data.edges.forEach((edge: any, index: number) => {
      if (!edge.id || typeof edge.id !== 'string') {
        throw new Error(`Invalid edge at index ${index}: missing or invalid id`);
      }
      if (!edge.fromNode || typeof edge.fromNode !== 'string') {
        throw new Error(`Invalid edge at index ${index}: missing or invalid fromNode`);
      }
      if (!edge.toNode || typeof edge.toNode !== 'string') {
        throw new Error(`Invalid edge at index ${index}: missing or invalid toNode`);
      }
      if (edge.fromSide && !['top', 'right', 'bottom', 'left'].includes(edge.fromSide)) {
        throw new Error(`Invalid edge at index ${index}: invalid fromSide`);
      }
      if (edge.toSide && !['top', 'right', 'bottom', 'left'].includes(edge.toSide)) {
        throw new Error(`Invalid edge at index ${index}: invalid toSide`);
      }
      if (edge.fromEnd && !['none', 'arrow'].includes(edge.fromEnd)) {
        throw new Error(`Invalid edge at index ${index}: invalid fromEnd`);
      }
      if (edge.toEnd && !['none', 'arrow'].includes(edge.toEnd)) {
        throw new Error(`Invalid edge at index ${index}: invalid toEnd`);
      }
    });

    return data as Canvas;
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error('Invalid JSON: ' + error.message);
    }
    throw error;
  }
}
