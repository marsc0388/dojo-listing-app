const config = require('../config')
const { Router } = require('express')

const router = Router()

// Initialize Controller
const dojosController = require('../controllers/dojosController')

// Get all
router.get('/dojos', dojosController.list)

// Get one
router.get('/dojos/:id', dojosController.show)

module.exports = router;