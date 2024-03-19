const express = require('express');
const router = express.Router();
const workflowController = require('../controllers/workflowController');

// Route for saving a workflow
router.post('/', workflowController.saveWorkflow);

// Route for executing a workflow
router.post('/:workflowId/execute', workflowController.executeWorkflow);

module.exports = router;
