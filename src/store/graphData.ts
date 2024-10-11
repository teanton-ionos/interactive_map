export interface VertexData {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;
}

export interface EdgeData {
  id: string;
  from: string;
  to: string;
}
export interface GraphData {
  vertices: VertexData[];
  edges: EdgeData[];
}
export const graphData: GraphData = {
  vertices: [
    { id: 'v0', objectName: "North Elevator Entrance", cx: 227, cy: 320 },
    { id: 'v1', objectName: null, cx: 225, cy: 320 },
    { id: 'v2', objectName: null, cx: 150, cy: 320 },
    { id: 'v3', objectName: null, cx: 150, cy: 220 },
    { id: 'v4', objectName: null, cx: 240, cy: 147 },
    { id: 'v5', objectName: null, cx: 560, cy: 147 },
    { id: 'v6', objectName: null, cx: 625, cy: 200 },
    { id: 'v7', objectName: null, cx: 660, cy: 245 },
    { id: 'v8', objectName: null, cx: 660, cy: 320 },
    { id: 'v9', objectName: null, cx: 580, cy: 320 },
    { id: 'v10', objectName: "South Elevator Entrance", cx: 560, cy: 320 },
  ],

  edges: [
    { id: 'v0_to_v1', from: 'v0', to: 'v1' },
    { id: 'v1_to_v2', from: 'v1', to: 'v2' },
    { id: 'v2_to_v3', from: 'v2', to: 'v3' },
    { id: 'v3_to_v4', from: 'v3', to: 'v4' },
    { id: 'v4_to_v5', from: 'v4', to: 'v5' },
    { id: 'v5_to_v6', from: 'v5', to: 'v6' },
    { id: 'v6_to_v7', from: 'v6', to: 'v7' },
    { id: 'v7_to_v8', from: 'v7', to: 'v8' },
    { id: 'v8_to_v9', from: 'v8', to: 'v9' },
    { id: 'v9_to_v10', from: 'v9', to: 'v10' },
  ],
};
