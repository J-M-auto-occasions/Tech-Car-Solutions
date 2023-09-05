const Car = require("../models/Car.model")

function isOwner(req, res, next){
    
    Car.findById(req.params.carId)
    if (req.session.currentUser.id === req.params){
        next()
    } else {
        res.status(401)
        .render("auth/user-profile", { errorMessage: "Unauthorized" });
    }

  }
  
  module.exports = isOwner