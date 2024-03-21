const Workflow = require('../models/Workflow.model');

// Controller for saving a workflow
exports.saveWorkflow = async (req, res) => {
  try {
    const { nodes, edges } = req.body;
    const workflow = new Workflow({ nodes, edges });
    await workflow.save();
    res.status(201).json({ message: 'Workflow saved successfully', workflow });
  } catch (error) {
    console.error('Error saving workflow:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller for retrieving a saved workflow by ID
exports.getWorkflowById = async (req, res) => {
  try {
    const { workflowId } = req.params;
    const workflow = await Workflow.findById(workflowId);
    if (!workflow) {
      return res.status(404).json({ error: 'Workflow not found' });
    }
    res.status(200).json({ workflow });
  } catch (error) {
    console.error('Error retrieving workflow:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
