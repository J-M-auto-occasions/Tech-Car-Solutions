// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware

require("./config")(app);


const capitalize = require("./utils/capitalize");
const isLoggedIn = require("./middleware/isLoggedIn");
const projectName = "tech-car-solutions";


app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

hbs.registerHelper("isOwner", (user, car) =>{
    if(car.owner && String(car.owner) === user._id  ){
        return `<a href="/cars/${car._id}/edit"><button class="btn btn-primary" type="submit"> Edit </button></a>
        <a href="/cars/${car._id}/delete"><button class="btn btn-danger">Delete</button></form>`
    }
    else {
        return }
})

app.use((req, res, next) => {
    if(req.session.currentUser){
        app.locals.user = req.session
    }else{
        app.locals.user = null
    }
    next()
})
// 👇 Start handling routes here

app.use("/", require("./routes/index.routes"));
app.use("/", require("./routes/car.routes"));
app.use("/", require("./routes/auth.routes"));
app.use("/", require("./routes/users.routes"));



//
// app.use("/", isLoggedIn, require("./routes/car.routes"));

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
