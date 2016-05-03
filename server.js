// Setting the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');

var app = express();

var port = process.env.PORT || 8080;
app.listen(port);

console.log('Server running at http://localhost:' + port);

module.exports = app;