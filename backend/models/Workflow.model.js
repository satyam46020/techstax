const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
  id: String,
  type: String,
  data: {
    label: String,
  },
  position: {
    x: Number,
    y: Number,
  },
});

const edgeSchema = new mongoose.Schema({
  id: String,
  source: String,
  target: String,
});

const workflowSchema = new mongoose.Schema({
  nodes: [nodeSchema],
  edges: [edgeSchema],
});

const Workflow = mongoose.model('Workflow', workflowSchema);

module.exports = Workflow;
