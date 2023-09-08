const express = require('express');
const router = express.Router();
const Car = require("../models/Car.model")
const User = require("../models/User.model")
const isLoggedIn = require("../middleware/isLoggedIn")
const fileUploader = require('../config/cloudinary.config')


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

router.get('/users/:userId/edit', async (req, res, next) => {

  const { userId } = req.params;

  try {
      const userDetails = await User.findById(userId);

      res.render("users/user-edit", {userDetails} )
      return
  } catch (error) {
      next(error)
  }
});


router.post("/users/:userId/edit", /*isLoggedIn,*/fileUploader.single('image'), (req, res, next) => {
  console.log("Hola", req.params)
  console.log("Hola", req.body)

  const { userId } = req.params;
  const { username, email, existingImage } = req.body;

  let image;
  if (req.file) {
      image = req.file.path
  } else {
      image = existingImage
  }

  User.findByIdAndUpdate(userId,
      { username, email, image},
      { new: true }
      )
      .then(updatedUser => {
        req.session.currentUser = updatedUser
        res.redirect(`/profile`)})
      .catch(error => next(error));
});



module.exports = router;