const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const multer = require('multer');

// Set up multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), dataController.uploadData);

module.exports = router;
