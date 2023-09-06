const express = require('express');
const Car = require("../models/Car.model");
const User = require("../models/User.model")
const router = express.Router();
const fileUploader = require('../config/cloudinary.config')

const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");
const isOwner = require("../middleware/isOwner")


//display cars from DB

router.get("/cars", (req, res, next) => {

    Car.find()
        .then((carsFromDB) => {
            res.render("cars/car-list", { cars: carsFromDB })
        })
        .catch(e => {
            console.log("error getting the list of cars from DB", e)
            next(e)
        })
})

//create cars from DB

router.get("/cars/create", isLoggedIn, (req, res, next) => {
    User.find()
    .then( usersFromDB => {
        const data = {
            users: usersFromDB
        }
        console.log(req.session.currentUser)
        res.render("cars/car-create", data)
    })
    .catch(e => {
        console.log("error displating the form to create a car", e)
        next(e)
    })
})

router.post("/cars/create", fileUploader.single('image'), isLoggedIn, (req, res, next)=>{

    const newCar = {
        owner: req.session.currentUser._id,
        make: req.body.make,
        model: req.body.model,
        image: req.file.path,
        price: req.body.price,
        seller: req.session.currentUser.username,
        year: req.body.year,
        kmDriven: req.body.kmDriven,
        transmission: req.body.transmission,
        power: req.body.power,
        location: req.body.location
    }

    Car.create(newCar)
    .then(()=>{
        res.redirect("/cars")
    })
    .catch(e => {
        console.log("error creating a new car", e)
        next(e)
    })
})

// edit cars from DB 

router.get('/cars/:carId/edit', isLoggedIn, isOwner, async  (req, res, next) => {
    const {} = req.body
    const { carId } = req.params;

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
router.post("/cars/:carId/edit", /*isLoggedIn,*/fileUploader.single('image'), (req, res, next) => {
    const { carId } = req.params;
    const { make, model, existingImage, price, seller, year, kmDriven, transmission, power, location } = req.body;

    let image;
    if(req.file){
        image = req.file.path
    } else{
        image = existingImage
    }

    Car.findByIdAndUpdate(carId, 
        { make, model, image, price, seller, year, kmDriven, transmission, power, location }, 
        { new: true })
        .then(updatedCar => res.redirect(`/cars`)) // go to the details page to see the updates
        .catch(error => next(error));
});

// DELETE: delete book
router.post("/cars/:carId/delete", isLoggedIn, isOwner, (req, res, next) => {
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