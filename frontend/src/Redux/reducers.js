import { combineReducers } from 'redux';
import {
  UPLOAD_DATA,
  ADD_NODE,
  ADD_CONNECTION,
  EXECUTE_WORKFLOW,
} from './actions';

const initialState = {
  elements: [], // For WorkflowBuilder
  progress: '', // For WorkflowExecutor
  error: null, // For WorkflowExecutor
};

const workflowReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NODE:
      return {
        ...state,
        elements: [...state.elements, action.payload],
      };
    case ADD_CONNECTION:
      return {
        ...state,
        elements: [...state.elements, action.payload],
      };
    case EXECUTE_WORKFLOW:
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  workflow: workflowReducer,
});
