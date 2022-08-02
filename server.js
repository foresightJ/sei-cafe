const express = require('express');
const favicon = require('serve-favicon');

const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
// calling on the connection string in the .env file
require('dotenv').config();
// connect to to the database
require('./config/database');
// create the server app
const app = express();

//mount logger & JSON middleware
app.use(logger('dev'));
app.use(express.json());

/** mount and configure serve-favicon and static 
middleware so serve from production ready code*/
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// configure to use port 3001 instead of 3000 during development
const port = process.env.PORT || 3001;

// set up the server to listen for requets
app.listen(port, function () {
	console.log(`Express app running on port $${port}`);
});

// all api routes go here0
// required inline router
// app.use('api', require('./routes/api/posts'));

// a catch all route for non-api routes
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index,html'));
});
