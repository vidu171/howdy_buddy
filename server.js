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
const port = process.env.PORT || 80;
const cors = require('cors');
const logger = require('morgan');
const fs=require('fs');
//var mysql = require('mysql');

/*const index = require('./routes/indexRoutes');
const todos = require('./routes/todosRoutes');*/

var http = require('http');
var AccessToken = require('twilio').jwt.AccessToken;
var VideoGrant = AccessToken.VideoGrant;
var randomName = require('./randomname');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./webpack.config.js');

const app = express();


app.set('view engine', 'ejs')


// Login



/*app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');*/

//For Static app
/*app.use(express.static(__dirname + '/public-static-html'))*/

//For create-react-app

app.use(webpackDevMiddleware(webpack(webpackConfig)));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public_html'))
// app.use(express.static(__dirname + '/build'))

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


// Set up the path for the quickstart.
var quickstartPath = path.join(__dirname, '/quickstart/public');
app.use('/quickstart', express.static(quickstartPath));

/*app.use('/', index);
app.use('/todos', todos);*/

app.get('/login', (req, res)=>    {
  res.render("index.ejs");
});


// var con = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'vibhi2112',
// 	database: 'howdybuddy'
// });
//
// con.connect(function(err){
// 	if (err) throw err;
// });
//
// app.get('/ContactUs',function(req,res,next){
// res.sendfile('./ContactUs.js');
// });
//
// app.post('/form', function(req, res) {
//
// console.log('req.body');
// console.log(req.body);
// var name = req.body.name;
// var email = req.body.email;
// var message = req.body.message;
//
// con.query("Insert into contact_us (Name, Email,Message) VALUES ('"+name+"','"+email+"','"+message+"')",function(err, result)
// {
//   if (err)
//      throw err;
// 	});
// 	res.redirect('/ContactUs');
// 	res.end();
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


app.listen(port, function() {
  console.log("listening on port: ", port);
})
