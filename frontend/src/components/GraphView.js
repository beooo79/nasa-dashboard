import { React, useEffect, useState } from "react";
import SortableTree from "react-sortable-tree";

export const GraphView = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/graph-data")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div style={{ height: 600 }}>
      <SortableTree treeData={data.treeData} />
    </div>
  );
};
