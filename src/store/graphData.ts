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
    { id: 'v1', objectName: null, cx: 361.105, cy: 512.811 },
    { id: 'v2', objectName: null, cx: 237.691, cy: 512.811 },
    { id: 'v6', objectName: 'Smth', cx: 663, cy: 180 },
    { id: 'v19', objectName: null, cx: 754.244, cy: 873.505 },
    { id: 'v20', objectName: null, cx: 622.812, cy: 873.505 },
    { id: 'v21', objectName: null, cx: 490.616, cy: 873.505 },
    { id: 'v22', objectName: null, cx: 361.105, cy: 873.505 },
    { id: 'v23', objectName: null, cx: 237.691, cy: 873.505 },
    { id: 'v24', objectName: null, cx: 237.691, cy: 439.536 },
    { id: 'v26', objectName: null, cx: 542.482, cy: 512.811 },
    { id: 'v27', objectName: null, cx: 779.083, cy: 512.811 },
    { id: 'v28', objectName: null, cx: 1017.929, cy: 512.811 },
    { id: 'v29', objectName: null, cx: 1218.515, cy: 512.811 },
    { id: 'v30', objectName: null, cx: 1218.515, cy: 459.155 },
    { id: 'v31', objectName: null, cx: 1218.515, cy: 640.699 },
    { id: 'v32', objectName: null, cx: 1218.515, cy: 830.906 },
    { id: 'v33', objectName: null, cx: 1020.234, cy: 873.505 },
    { id: 'v35', objectName: null, cx: 1156.16, cy: 970.567 },
    { id: 'v36', objectName: null, cx: 1106.42, cy: 970.567 },
    { id: 'v37', objectName: null, cx: 1218.515, cy: 970.567 },
    { id: 'v38', objectName: null, cx: 1106.42, cy: 873.505 },
    { id: 'v39', objectName: null, cx: 1106.42, cy: 512.811 },
    { id: 'v40', objectName: null, cx: 361.105, cy: 599.577 },
    { id: 'v41', objectName: null, cx: 361.105, cy: 690.858 },
    { id: 'v42', objectName: 'South Elevator Entrance', cx: 203.474, cy: 184.225 },
    { id: 'v51', objectName: null, cx: 1181.918, cy: 343.02 },
    { id: 'v52', objectName: null, cx: 1181.918, cy: 512.811 },
    { id: 'v53', objectName: null, cx: 1181.918, cy: 459.155 },
    { id: 'v54', objectName: null, cx: 1316.882, cy: 214.387 },
    { id: 'v55', objectName: null, cx: 1242.029, cy: 214.387 },
    { id: 'v56', objectName: null, cx: 1242.029, cy: 343.02 },
    { id: 'v57', objectName: null, cx: 238.382, cy: 214.387 },
    { id: 'v58', objectName: null, cx: 203.474, cy: 214.387 },
    { id: 'v61', objectName: null, cx: 524.915, cy: 214.387 },
    { id: 'v62', objectName: null, cx: 345.867, cy: 214.387 },
    { id: 'v63', objectName: null, cx: 661.007, cy: 214.387 },
    { id: 'v64', objectName: null, cx: 661.007, cy: 254.159 },
    { id: 'v65', objectName: null, cx: 661.007, cy: 512.811 },
    { id: 'v66', objectName: null, cx: 833.196, cy: 214.387 },
    { id: 'v67', objectName: null, cx: 901.613, cy: 214.387 },
    { id: 'v68', objectName: null, cx: 901.613, cy: 512.811 },
    { id: 'v69', objectName: null, cx: 999.008, cy: 214.387 },
    { id: 'v70', objectName: null, cx: 1181.918, cy: 214.387 },
    { id: 'v71', objectName: null, cx: 433.087, cy: 873.505 },
    { id: 'v72', objectName: 'North Elevator Entrance', cx: 433.087, cy: 846.411 },
    { id: 'v73', objectName: null, cx: 889.316, cy: 873.505 },
    { id: 'v76', objectName: null, cx: 1106.42, cy: 789.755 },
    { id: 'v77', objectName: null, cx: 1218.515, cy: 789.755 },
  ],

  edges: [
    { id: 'v1_to_v2', from: 'v1', to: 'v2' },
    { id: 'v34_to_v35', from: 'v34', to: 'v35' },
    { id: 'v35_to_v36', from: 'v35', to: 'v36' },
    { id: 'v36_to_v38', from: 'v36', to: 'v38' },
    { id: 'v33_to_v38', from: 'v33', to: 'v38' },
    { id: 'v9_to_v33', from: 'v9', to: 'v33' },
    { id: 'v33_to_v35', from: 'v9', to: 'v33' },
    { id: 'v33_to_v73', from: 'v33', to: 'v73' },
    { id: 'v19_to_v73', from: 'v19', to: 'v73' },
    { id: 'v19_to_v20', from: 'v19', to: 'v20' },
    { id: 'v20_to_v21', from: 'v20', to: 'v21' },
    { id: 'v21_to_v71', from: 'v21', to: 'v71' },
    { id: 'v21_to_v5', from: 'v21', to: 'v5' },
    { id: 'v20_to_v6', from: 'v20', to: 'v6' },
    { id: 'v19_to_v7', from: 'v19', to: 'v7' },
    { id: 'v73_to_v8', from: 'v73', to: 'v8' },
    { id: 'v22_to_v71', from: 'v22', to: 'v71' },
    { id: 'v22_to_v4', from: 'v22', to: 'v4' },
    { id: 'v71_to_v72', from: 'v71', to: 'v72' },
    { id: 'v22_to_v23', from: 'v22', to: 'v23' },
    { id: 'v23_to_v3', from: 'v23', to: 'v3' },
    { id: 'v22_to_v41', from: 'v22', to: 'v41' },
    { id: 'v40_to_v40', from: 'v40', to: 'v40' },
    { id: 'v1_to_v1', from: 'v1', to: 'v1' },
    { id: 'v1_to_v10', from: 'v1', to: 'v10' },
    { id: 'v26_to_v26', from: 'v26', to: 'v26' },
    { id: 'v1_to_v40', from: 'v1', to: 'v40' },
    { id: 'v1_to_v26', from: 'v1', to: 'v26' },
    { id: 'v11_to_v26', from: 'v11', to: 'v26' },
    { id: 'v26_to_v65', from: 'v26', to: 'v65' },
    { id: 'v27_to_v65', from: 'v27', to: 'v65' },
    { id: 'v12_to_v27', from: 'v12', to: 'v27' },
    { id: 'v27_to_v68', from: 'v27', to: 'v68' },
    { id: 'v40_to_v41', from: 'v40', to: 'v41' },
    { id: 'v19_to_v33', from: 'v19', to: 'v33' },
    { id: 'v28_to_v28', from: 'v28', to: 'v28' },
    { id: 'v39_to_v39', from: 'v39', to: 'v39' },
    { id: 'v52_to_v53', from: 'v52', to: 'v53' },
    { id: 'v51_to_v70', from: 'v51', to: 'v70' },
    { id: 'v28_to_v39', from: 'v28', to: 'v39' },
    { id: 'v39_to_v52', from: 'v39', to: 'v52' },
    { id: 'v29_to_v30', from: 'v29', to: 'v30' },
    { id: 'v14_to_v30', from: 'v14', to: 'v30' },
    { id: 'v15_to_v31', from: 'v15', to: 'v31' },
    { id: 'v16_to_v32', from: 'v16', to: 'v32' },
    { id: 'v13_to_v28', from: 'v13', to: 'v28' },
    { id: 'v51_to_v53', from: 'v51', to: 'v53' },
    { id: 'v55_to_v70', from: 'v55', to: 'v70' },
    { id: 'v2_to_v24', from: 'v2', to: 'v24' },
    { id: 'v24_to_v25', from: 'v24', to: 'v25' },
    { id: 'v24_to_v57', from: 'v24', to: 'v57' },
    { id: 'v57_to_v58', from: 'v57', to: 'v58' },
    { id: 'v42_to_v58', from: 'v42', to: 'v58' },
    { id: 'v57_to_v62', from: 'v57', to: 'v62' },
    { id: 'v43_to_v62', from: 'v43', to: 'v62' },
    { id: 'v59_to_v62', from: 'v59', to: 'v62' },
    { id: 'v61_to_v62', from: 'v61', to: 'v62' },
    { id: 'v44_to_v61', from: 'v44', to: 'v61' },
    { id: 'v60_to_v61', from: 'v60', to: 'v61' },
    { id: 'v61_to_v63', from: 'v61', to: 'v63' },
    { id: 'v45_to_v63', from: 'v45', to: 'v63' },
    { id: 'v63_to_v64', from: 'v63', to: 'v64' },
    { id: 'v49_to_v54', from: 'v49', to: 'v54' },
    { id: 'v55_to_v56', from: 'v55', to: 'v56' },
    { id: 'v51_to_v56', from: 'v51', to: 'v56' },
    { id: 'v50_to_v56', from: 'v50', to: 'v56' },
    { id: 'v30_to_v53', from: 'v30', to: 'v53' },
    { id: 'v29_to_v52', from: 'v29', to: 'v52' },
    { id: 'v29_to_v31', from: 'v29', to: 'v31' },
    { id: 'v35_to_v37', from: 'v35', to: 'v37' },
    { id: 'v18_to_v19', from: 'v18', to: 'v19' },
    { id: 'v64_to_v65', from: 'v64', to: 'v65' },
    { id: 'v67_to_v68', from: 'v67', to: 'v68' },
    { id: 'v28_to_v68', from: 'v28', to: 'v68' },
    { id: 'v63_to_v66', from: 'v63', to: 'v66' },
    { id: 'v2_to_v23', from: 'v2', to: 'v23' },
    { id: 'v17_to_v33', from: 'v17', to: 'v33' },
    { id: 'v46_to_v66', from: 'v46', to: 'v66' },
    { id: 'v32_to_v37', from: 'v32', to: 'v37' },
    { id: 'v54_to_v55', from: 'v54', to: 'v55' },
    { id: 'v47_to_v69', from: 'v47', to: 'v69' },
    { id: 'v67_to_v69', from: 'v67', to: 'v69' },
    { id: 'v66_to_v67', from: 'v66', to: 'v67' },
    { id: 'v69_to_v70', from: 'v69', to: 'v70' },
    { id: 'v48_to_v70', from: 'v48', to: 'v70' },
    { id: 'v38_to_v76', from: 'v38', to: 'v76' },
    { id: 'v39_to_v76', from: 'v39', to: 'v76' },
    { id: 'v76_to_v77', from: 'v76', to: 'v77' },
    { id: 'v31_to_v77', from: 'v31', to: 'v77' },
    { id: 'v32_to_v77', from: 'v32', to: 'v77' },
    { id: 'v41_to_v75', from: 'v41', to: 'v75' },
    { id: 'v40_to_v74', from: 'v40', to: 'v74' },
  ],
};
