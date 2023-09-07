require("dotenv").config();
require("./db");

const express = require("express");
const hbs = require("hbs");
const app = express();

require("./config")(app);


const capitalize = require("./utils/capitalize");
const projectName = "tech-car-solutions";


app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

hbs.registerHelper("isOwner", (user, car) => {
    if (car.owner && String(car.owner) === user._id) {
        return `<a href="/cars/${car._id}/edit"><button class="btn btn-primary" type="submit"> Edit </button></a>
        <form action="/cars/${car._id}/delete" method="POST"><button class="btn btn-danger">Delete</button></form>`
    }
    else {
        return
    }
})

app.use((req, res, next) => {
    if (req.session.currentUser) {
        app.locals.user = req.session
    } else {
        app.locals.user = null
    }
    next()
})


app.use("/", require("./routes/index.routes"));
app.use("/", require("./routes/car.routes"));
app.use("/", require("./routes/auth.routes"));
app.use("/", require("./routes/users.routes"));


require("./error-handling")(app);

module.exports = app;
