//Dependencies
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//GET CRUD Method that displays the main page with the burgers
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgerOrder = {
            burgers: data
        };
        console.log(burgerOrder);
        res.render("index", burgerOrder);
    });
});

//POST CRUD Method that creates and puts in the burger order

//PUT CRUD Method that updates burger order

//DELETE CRUD Method that deletes specific burger order based on id

module.exports = router;