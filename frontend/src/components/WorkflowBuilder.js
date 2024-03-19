import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactFlow, { Background, Controls } from 'react-flow-renderer';
import { addNode, addConnection } from '../Redux/actions';

const WorkflowBuilder = () => {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.workflow.elements);

  const handleNodeAdd = (node) => {
    dispatch(addNode(node));
  };

  const handleConnectionAdd = (connection) => {
    dispatch(addConnection(connection));
  };

  return (
    <div style={{ height: '600px', width: '100%' }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={() => {}}
        onConnect={(connection) => handleConnectionAdd(connection)}
        onNodeDragStop={(node) => handleNodeAdd(node)}
      >
        <Background color="#aaa" gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default WorkflowBuilder;
