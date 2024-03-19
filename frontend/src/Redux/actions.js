export const UPLOAD_DATA = 'UPLOAD_DATA';
export const ADD_NODE = 'ADD_NODE';
export const ADD_CONNECTION = 'ADD_CONNECTION';
export const EXECUTE_WORKFLOW = 'EXECUTE_WORKFLOW';

export const uploadData = (file, workflowId) => ({
  type: UPLOAD_DATA,
  payload: { file, workflowId },
});

export const addNode = (node) => ({
  type: ADD_NODE,
  payload: node,
});

export const addConnection = (connection) => ({
  type: ADD_CONNECTION,
  payload: connection,
});

export const executeWorkflow = (workflowId, data) => ({
  type: EXECUTE_WORKFLOW,
  payload: { workflowId, data },
});
