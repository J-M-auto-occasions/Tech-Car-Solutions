const express = require('express');
// const name = require("../models/Name.model");
const Car = require("../models/Car.model");
const router = express.Router();

const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/car", (req, res, next) => {

    Car.find()
        .populate("seller")
        .then((carFromDB) => {})

        res.render("car/car")

})