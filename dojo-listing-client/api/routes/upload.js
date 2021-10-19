const config = require('../config');
const { Router } = require('express');

const router = Router()

// Initialize user controller
const uploadController = require("../controllers/uploadController");

router.post("/upload", uploadController.uploadFile);

module.exports = router