const express = require('express');
const Car = require("../models/Car.model");
const User = require("../models/User.model")
const router = express.Router();

const isLoggedIn = require("../middleware/isLoggedIn");

//display cars from DB

router.get("/cars", (req, res, next) => {

    Car.find()
        .then((carsFromDB) => {
            console.log("Hola")
            res.render("cars/car-list", { cars: carsFromDB })

        })
        .catch(e => {
            console.log("error getting the list of cars from DB", e)
            next(e)
        })
})

//create cars from DB

router.get("/cars/create", (req, res, next) => {
    User.find()
    .then( usersFromDB => {
        const data = {
            users: usersFromDB
        }
        res.render("cars/car-create", data)
    })
    .catch(e => {
        console.log("error displating the form to create a car", e)
        next(e)
    })
})

router.post("/cars/create", (req, res, next)=>{

    const newCar = {
        model: req.body.model,
        img: req.body.image,
        price: req.body.price,
        seller: req.body.seller,
        registration: req.body.registration,
        kmDriven: req.body.kmDriven,
        transmission: req.body.transmission,
        power: req.body.power,
        location: req.body.location
        //embedded elements still must be populated
    }

    Car.create(newCar)
    .then(()=>{

        console.log(newCar)
        res.redirect("/cars")
    })
    .catch(e => {
        console.log("error creating a new car", e)
        next(e)
    })
})

// edit cars from DB


module.exports = router