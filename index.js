'use strict';

/**
 * Load Twilio configuration from .env config file - the following environment
 * variables should be set:
 * process.env.TWILIO_ACCOUNT_SID
 * process.env.TWILIO_API_KEY
 * process.env.TWILIO_API_SECRET
 */

require('dotenv').load();


const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8001;
const cors = require('cors');
const logger = require('morgan');
const fs=require('fs');


var http = require('http');
var AccessToken = require('twilio').jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;
var randomName = require('./randomname');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./webpack.config.js');

// Create Express webapp.
var app = express();
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(__dirname + '/build/'))

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// Set up the paths for the examples.
[
  'bandwidthconstraints',
  'codecpreferences',
  'localvideofilter',
  'localvideosnapshot',
  'mediadevices'
].forEach(function(example) {
  var examplePath = path.join(__dirname, `../examples/${example}/public`);
  app.use(`/${example}`, express.static(examplePath));
});

// Set up the path for the quickstart.
var quickstartPath = path.join(__dirname, '/quickstart/public');
app.use('/quickstart', express.static(quickstartPath));


/**
 * Default to the Quick Start application.
 */
// app.get('/', function(request, response) {
//   response.redirect('/quickstart');
// });



/**
 * Generate an Access Token for a chat application user - it generates a random
 * username for the client requesting a token, and takes a device ID as a query
 * parameter.
 */
app.get('/token', function(request, response) {
  var identity = randomName();

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created.
  var token = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY,
    process.env.TWILIO_API_SECRET
  );

  // Assign the generated identity to the token.
  token.identity = identity;

  // Grant the access token Twilio Video capabilities.
  var grant = new VideoGrant();
  token.addGrant(grant);

  // Serialize the token to a JWT string and include it in a JSON response.
  response.send({
    identity: identity,
    token: token.toJwt()
  });
});

// Create http server and run it.
var server = http.createServer(app);
server.listen(port, function() {
  console.log('Express server running on *:' + port);
});
