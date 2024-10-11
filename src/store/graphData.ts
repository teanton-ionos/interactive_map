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

    { id: 'v24', objectName: null, cx: 240, cy: 147 },
    { id: 'v25', objectName: null, cx: 560, cy: 147 },
    { id: 'v42', objectName: 'South Elevator Entrance', cx: 203.474, cy: 184.225 },
    { id: 'v57', objectName: null, cx: 225, cy: 320 },
    { id: 'v58', objectName: null, cx: 150, cy: 320 },
    { id: 'v62', objectName: null, cx: 150, cy: 220 },
    { id: 'v72', objectName: 'North Elevator Entrance', cx: 433.087, cy: 846.411 },

  ],

  edges: [

  ],
};
