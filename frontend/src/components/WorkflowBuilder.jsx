import React, { useCallback } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge } from 'react-flow-renderer';

const WorkflowBuilder = () => {
  const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: 'workflow A' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: 'workflow' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
    </div>
  );
};

export default WorkflowBuilder;
