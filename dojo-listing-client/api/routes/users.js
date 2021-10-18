const config = require('../config');
const { Router } = require('express');

const router = Router()

// Initialize user controller
const usersController = require("../controllers/usersController");

// Register
router.post('users/register', usersController.register)

// Login
router.post('/users/login', usersController.login)

// Get user
router.get('/users/user', usersController.user)

module.exports = router