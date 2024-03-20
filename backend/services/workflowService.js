const Workflow = require('../models/Workflow.model');
const nodeHandlers = require('../utils/nodeHandlers');

const workflowService = {
  executeWorkflow: async (workflowId) => {
    try {
      const workflow = await Workflow.findById(workflowId);
      if (!workflow) {
        throw new Error('Workflow not found');
      }

      let result = null;
      for (const node of workflow.nodes) {
        switch (node.type) {
          case 'Filter Data':
            result = await nodeHandlers.handleFilterData(node, result);
            break;
          case 'Wait':
            result = await nodeHandlers.handleWait(node, result);
            break;
          case 'Convert Format':
            result = await nodeHandlers.handleConvertFormat(node, result);
            break;
          case 'Send POST Request':
            result = await nodeHandlers.handleSendPostRequest(node, result);
            break;
          default:
            throw new Error(`Unknown node type: ${node.type}`);
        }
      }

      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = workflowService;
