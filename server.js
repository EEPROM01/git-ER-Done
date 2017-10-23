
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//creating an "express" server
var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
// Points server to  files route(s)
// <><><><<>><><><><><><><><><><><><><>
require(path.join(__dirname, "./app/routing/api-routes.js"))(app);
require(path.join(__dirname, "./app/routing/html-routes.js"))(app);


//<><><>><><><><><><><><><><><><><>><><><>
// LISTENER

app.listen(PORT, function() {
  console.log("listening on PORT: " + PORT);
});