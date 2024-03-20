const dataService = {
    processUploadedData: async (file) => {
      try {
        return { fileName: file.originalname, fileType: file.mimetype };
      } catch (error) {
        throw error;
      }
    }
  };
  
  module.exports = dataService;
  