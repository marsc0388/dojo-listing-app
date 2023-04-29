require('dotenv').config()

const express = require('express')
const db = require('./db')
const morgan = require("morgan");
const cors = require("cors");


// Create express instnace
const app = express()

// Register cors
app.use(cors());

// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

// Require & Import API routes
const users = require('./routes/users')
const dojos = require('./routes/dojos')
const upload = require('./routes/upload')

// Use API Routes
app.use(users)
app.use(dojos)
app.use(upload)

app.get('/', (req, res) => {
    res.json("Hello World!");
})

// Export the server middleware
module.exports = {
    path: '/api',
    handler: app
  }

// Start standalone server if directly running
// if (require.main === module) {
//     const port = process.env.PORT || 3001
//     app.listen(port, () => {
//       // eslint-disable-next-line no-console
//       console.log(`API server listening on port ${port}`)
//     })
//   }