//Dependencies
const express = require("express");
const app = express();
// const exphbs = require('express-handlebars');
const bodyParser = require("body-parser");

//Use Handlebars
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ /* config */ });

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

const PORT = process.env.PORT || 8889;

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Tell app to use bodyParser
app.use(bodyParser.json());

//Uses public as a shortcut directory
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
