const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  fileType: { type: String, required: true },
  fileData: { type: Buffer, required: true },
});

module.exports = mongoose.model('Data', dataSchema);
