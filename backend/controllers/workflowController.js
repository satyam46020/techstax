const Workflow = require('../models/Workflow.model');
const workflowService = require('../services/workflowService');

// Controller functions for workflow operations
const workflowController = {
  // Save a new workflow
  saveWorkflow: async (req, res) => {
    try {
      const { nodes, connections } = req.body;
      const newWorkflow = new Workflow({ nodes, connections });
      await newWorkflow.save();
      res.status(201).json({ message: 'Workflow saved successfully' });
    } catch (error) {
      console.error('Error saving workflow:', error);
      res.status(500).json({ error: 'Failed to save workflow' });
    }
  },

  // Execute a saved workflow
  executeWorkflow: async (req, res) => {
    try {
      const workflowId = req.params.id;
      const result = await workflowService.executeWorkflow(workflowId);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error executing workflow:', error);
      res.status(500).json({ error: 'Failed to execute workflow' });
    }
  }
};

module.exports = workflowController;
