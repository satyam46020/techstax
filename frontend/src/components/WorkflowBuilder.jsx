import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'react-flow-renderer';
 
import 'react-flow-renderer/dist/style.css';
import DnDFlow from './DnDFlow';
 
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: 'node 1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: 'node 2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
export default function WorkFlowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
        <DnDFlow/>
    </div>
  );
}