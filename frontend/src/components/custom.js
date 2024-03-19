import React from 'react';
import { Handle, Node } from 'react-flow-renderer';

const CustomNode = ({ data }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #aaa', borderRadius: '5px', backgroundColor: '#fff' }}>
      {data.label}
      <Handle type="target" position="top" style={{ background: '#555' }} />
      <Handle type="source" position="bottom" style={{ background: '#555' }} />
    </div>
  );
};

const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY }) => {
  return (
    <>
      <path
        id={id}
        d={`M${sourceX},${sourceY} L${targetX},${targetY}`}
        stroke="#555"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
      <marker
        id="arrowhead"
        markerWidth="10"
        markerHeight="7"
        refX="0"
        refY="3.5"
        orient="auto"
        fill="#555"
      >
        <polygon points="0 0, 10 3.5, 0 7" />
      </marker>
    </>
  );
};

export { CustomNode, CustomEdge };
