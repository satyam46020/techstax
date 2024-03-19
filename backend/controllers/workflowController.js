const Workflow = require('../models/Workflow.model');

// Controller for saving a workflow
exports.saveWorkflow = async (req, res) => {
  try {
    const { nodes, connections } = req.body;
    const workflow = new Workflow({ nodes, connections });
    await workflow.save();
    res.status(201).json({ message: 'Workflow saved successfully' });
  } catch (error) {
    console.error('Error saving workflow:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for executing a workflow
exports.executeWorkflow = async (req, res) => {
    try {
      const { workflowId } = req.params;
      res.status(200).json({ message: 'Workflow executed successfully' });
    } catch (error) {
      console.error('Error executing workflow:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
