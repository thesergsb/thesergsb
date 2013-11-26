/**
Express.js (Node.js) server 
*/

var express = require('express');
var fs = require('fs');

//Create express app
var app = express();

//Host static files for all directories
app.use(express.static(__dirname));
app.use("/images",express.static(__dirname + "/images"));
app.use("/js", express.static(__dirname+"/js"));

//Handler for main page
app.get('/', function(req, res){
  fs.readFile("./index.html", function(err,data) {
  	var html = data.toString();
  	res.setHeader('Content-Type', 'text/html');
  	res.setHeader('Content-Length', html.length);
  	res.end(html);
  });
});

//Misc Includes
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening on port' + port);

/**
Error Handlers
*/

//logs errors to console
function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

//throws errors when its client side
function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.send(500, { error: 'Something went wrong.' });
  } else {
    next(err);
  }
}

//catch-all
function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}