const mongoose = require('mongoose');

const workflowSchema = new mongoose.Schema({
  nodes: [{
    type: { type: String, required: true },
  }],
  connections: [{
    source: { type: String, required: true },
    target: { type: String, required: true }
  }]
});

module.exports = mongoose.model('Workflow', workflowSchema);
