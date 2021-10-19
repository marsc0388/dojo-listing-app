const {config, isAuthenticated } = require('../config')
const { Router } = require('express')

const router = Router()

// Initialize Controller
const dojosController = require('../controllers/dojosController');

// Get all
router.get('/dojos', dojosController.list)

// Test route
// router.get('/dojos', (req, res) => {
//     res.json("Hello all dojos");
// });
// Get one
router.get('/dojos/:id', dojosController.show)

// Create
router.post('/dojos', isAuthenticated, dojosController.create);


module.exports = router;