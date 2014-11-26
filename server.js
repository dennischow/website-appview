/* --------------------
// Commond
* Install express : npm install --save-dev express

* Start webport : npm start
* Access : http://localhost:3000/
-------------------- */

var express = require('express');
var app = express();

var serverPort = 3000;


/* --------------------
// Build Destination
-------------------- */
var buildPath = 'BUILD-PRODUCTION';


// app.get('/', function(req, res){
// 	console.log('Server Starts Port : ' + serverPort);
// 	res.send('Hello World');
// });

app.use(
	"/", //the URL throught which you want to access to you static content
	express.static(__dirname + '/' + buildPath) //where your static content is located in your filesystem
);

app.listen( serverPort );
console.log("App listening on port : " + serverPort);