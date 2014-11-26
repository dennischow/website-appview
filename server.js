var express = require('express');
var app = express();

var serverPort = 3000;

// app.get('/', function(req, res){
// 	console.log('Server Starts Port : ' + serverPort);
// 	res.send('Hello World');
// });

app.use(
	"/", //the URL throught which you want to access to you static content
	express.static(__dirname) //where your static content is located in your filesystem
);

app.listen( serverPort );
console.log("App listening on port : " + serverPort);