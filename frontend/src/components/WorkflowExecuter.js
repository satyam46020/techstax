import React from 'react';
import { useSelector } from 'react-redux';

const WorkflowExecutor = () => {
  const progress = useSelector((state) => state.workflow.progress);
  const error = useSelector((state) => state.workflow.error);

  return (
    <div>
      <h2>Workflow Execution</h2>
      <p>Progress: {progress}</p>
      <p>Error: {error}</p>
      {/* Display execution progress, errors, etc. */}
    </div>
  );
};

export default WorkflowExecutor;
