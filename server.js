//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

//Tell app to use bodyParser
app.use(bodyParser.json());

//Uses public as a shortcut directory
app.use(express.static(__dirname + '/public'));

//Use Handlebars
var exphbs = require("express-handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});