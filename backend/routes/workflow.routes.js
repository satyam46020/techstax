const express = require('express');
const router = express.Router();
const workflowController = require('../controllers/workflowController');

// Route for saving a workflow
router.post('/', workflowController.saveWorkflow);

// Route for retrieving a saved workflow by ID
router.get('/:workflowId', workflowController.getWorkflowById);

module.exports = router;
