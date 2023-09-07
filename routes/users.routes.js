const express = require('express');
const router = express.Router();
const Car = require("../models/Car.model")
const isLoggedIn = require("../middleware/isLoggedIn")

/* GET home page */

router.get("/profile", isLoggedIn, (req, res, next) => {
  Car.find({owner: req.session.currentUser._id})
  .then((carsFromDB)=>{
    const data = {
      currentUser: req.session.currentUser,
      cars: carsFromDB
    }
    res.render("auth/user-profile", data);
  })
  .catch(e => {
    console.log("error getting the list of cars of the user from DB", e)
    next(e)
})

});

module.exports = router;