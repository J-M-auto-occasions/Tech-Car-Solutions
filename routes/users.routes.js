const express = require('express');
const router = express.Router();
const Car = require("../models/Car.model")

/* GET home page */

router.get("/profile", (req, res, next) => {
  Car.find()
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

/*
router.get("/profile", (req, res) => {

  const data = {
    currentUser: req.session.currentUser
  }
  res.render('auth/user-profile', data)
})
*/

module.exports = router;