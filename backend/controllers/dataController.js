const Data = require('../models/Data');
const dataService = require('../services/dataService');

const dataController = {
  uploadData: async (req, res) => {
    try {
      const uploadedData = await dataService.processUploadedData(req.file);
      res.status(200).json({ message: 'Data uploaded successfully', data: uploadedData });
    } catch (error) {
      console.error('Error uploading data:', error);
      res.status(500).json({ error: 'Failed to upload data' });
    }
  }
};

module.exports = dataController;
