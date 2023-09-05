const Car = require("../models/Car.model")

async function isOwner(req, res, next) {

    const car = await Car.findById(req.params.carId)

    if (car.owner && req.session.currentUser._id === car.owner.toString()) {

        next()
    } else {
        res.status(401)
            .render("error", { errorMessage: "Unauthorized", currentUser: req.session.currentUser });
    }

}

module.exports = isOwner
