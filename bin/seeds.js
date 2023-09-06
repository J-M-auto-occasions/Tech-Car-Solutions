const mongoose = require('mongoose');
const Car = require('../models/Car.model');

require('dotenv').config(); // import and configure dotenv (loads environment variables from .env file)

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tech-car-solutions';

//this is a large list of cars
const cars = [
  {
    "year": 2016,
    "power": 365,
    "make": "bmw",
    "model": "m2",
    "price": 51700,
    "image": "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/16q1/665019/2016-bmw-m2-full-test-review-car-and-driver-photo-665835-s-original.jpg?crop=0.891xw:0.730xh;0.0561xw,0.113xh&resize=1200:*"
  },
  {
    "year": 2016,
    "power": 201,
    "make": "acura",
    "model": "ilx",
    "price": 31890,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,
    "power": 237,
    "make": "alfa-romeo",
    "model": "4c-spider",
    "price": 63900,
    "image": "https://reviewgarage.files.wordpress.com/2016/07/2016_alfa_romeo_4c-9.jpg?w=1400:*"
  },
  {
    "year": 2016,
    "power": 565,
    "make": "aston-martin",
    "model": "v12-vantage-s",
    "price": 198195,
    "image": "https://collectingcars.imgix.net/images/2020/10/DSC_0325.jpg?w=1263&fit=fillmax&crop=edges&auto=format,compress&cs=srgb&q=85:*"
  },
  {
    "year": 2017,
    "power": 380,
    "make": "jaguar",
    "model": "f-pace",
    "price": 56700,
    "image": "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2016/04/2017-Jaguar-F-Pace-244.jpg?crop=0.587xw:0.480xh;0.349xw,0.381xh&resize=1200:*"
  },
  {
    "year": 2016,
    "power": 204,
    "make": "audi",
    "model": "a3-sportback-e-tron",
    "price": 46800,
    "image": "https://www.pooleaudi.co.uk/media/images/50682646/A3-Sportback-e-tron-2019.jpg"
  },
]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

//     return Car.deleteMany({}); //WARNING: this will delete all cras in your DB !!
//   })
//   .then((response) => {
//     console.log(response);

    return Car.insertMany(cars);
  })
  .then(carsFromDB => {
    console.log(`Created ${carsFromDB.length} cars`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to DB: ", err);
  });


