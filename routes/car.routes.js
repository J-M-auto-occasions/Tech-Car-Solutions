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

router.get('/cars/:carId/edit', /*isLoggedIn,*/ async  (req, res, next) => {
    const {} = req.body
    const { carId } = req.params;
    // console.log("body",req.body)
    // console.log("params", req.params)
    // Car.findByIdAndUpdate(carId)
    //     .then((carFromDB) => {
    //         const data = {
    //             car: carFromDB,
    //         }
    //         res.render("cars/car-edit", data)
    //     })
    //     .catch((e) => { console.log(e) })

    try {
        const carDetails = await Car.findById(carId);

        const data = {
            car: carDetails,
        }
        res.render("cars/car-edit", data)
    } catch (error) {
        next(error)
    }
});

// UPDATE: process form
router.post("/cars/:carId/edit", /*isLoggedIn,*/(req, res, next) => {
    const { carId } = req.params;
    const { model, img, price, seller, registration, kmDriven, transmission, power, location } = req.body;

    Car.findByIdAndUpdate(carId, { model, img, price, seller, registration, kmDriven, transmission, power, location }, { new: true })
        .then(updatedCar => res.redirect(`/cars/${updatedCar._id}/edit`)) // go to the details page to see the updates
        .catch(error => next(error));
});

// DELETE: delete book
router.post("/cars/:carId/delete", /*isLoggedIn,*/(req, res, next) => {
    const { carId } = req.params;

    Car.findByIdAndDelete(carId)
        .then(() => res.redirect('/cars'))
        .catch(error => next(error));
});



// READ: display details of car
router.get("/cars/:carId", (req, res, next) => {
    const id = req.params.carId;
    Car.findById(id)
        .then(carFromDB => {
            res.render("cars/car-details", carFromDB);
        })
        .catch((e) => {
            console.log("Error getting book details from DB", e);
            next(e);
        })

})




module.exports = router