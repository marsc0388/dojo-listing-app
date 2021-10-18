require('dotenv').config()

const express = require('express')
const db = require('./db')


// Create express instnace
const app = express()

// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Require & Import API routes
const users = require('./routes/users')
const dojos = require('./routes/dojos')

// Use API Routes
app.use(users)
app.use(dojos)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}