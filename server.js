/// ==============================================================================
// DEPENDENCIES 
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
// Points server to  files route(s)
// <><><><<>><><><><><><><><><><><><><>
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


//<><><>><><><><><><><><><><><><><>><><><>
// LISTENER

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});