require('dotenv').config()

const mongoose = require('mongoose');
// TODO: Change connection string for heroku
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dojoDb', {
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                            ssl: true,
                          });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("MongoDB Connected...");
});

module.exports = db