const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');

// create the server app
const app = express();

//mount logger & JSON middleware
app.use(logger('dev'));
app.use(express.json());

/** mount and configure serve-favicon and static 
middleware so serve from production ready code*/
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// all api routes go here

// a catch all route for non-api routes
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index,html'));
});

// configure to use port 3001 instead of 3000 during development
const port = process.env.PORT || 3001;

// set up the server to listen for requets
app.listen(port, function () {
	console.log(`Express app running on port $${port}`);
});
