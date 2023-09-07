const mongoose = require('mongoose');
const Car = require('../models/Car.model');

require('dotenv').config(); // import and configure dotenv (loads environment variables from .env file)

const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://jmauto:Welcome2023!@cluster0.sfl8q5o.mongodb.net/tech-car-solutions?retryWrites=true&w=majority';

// const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tech-car-solutions';

//this is a large list of cars
const cars = [
  {
    "owner": "64f5dbafba8c17cead1fb58e",
    "make": "BMW",
    "year": 2016,
    "model": "M2",
    "power": 365,
    "seller": "CarSeller",
    "kmDriven": 100000,
    "transmission": "manual",
    "location": "Texas",
    "price": 51700,
    "image": "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/16q1/665019/2016-bmw-m2-full-test-review-car-and-driver-photo-665835-s-original.jpg?crop=0.891xw:0.730xh;0.0561xw,0.113xh&resize=1200:*"
  },
  {
    "owner": "64f5dbafba8c17cead1fb58e",
    "make": "Acura",
    "year": 2016,
    "model": "ILX",
    "power": 201,
    "seller": "CarSeller",
    "kmDriven": 100000,
    "transmission": "manual",
    "location": "Texas",
    "price": 31890,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "owner": "64f5dbafba8c17cead1fb58e",
    "make": "Alfa-Romeo",
    "year": 2016,
    "model": "4c-Spider",
    "power": 237,
    "seller": "CarSeller",
    "kmDriven": 100000,
    "transmission": "manual",
    "location": "Texas",
    "price": 63900,
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Alfa_romeo_4c_front_right.jpg/1200px-Alfa_romeo_4c_front_right.jpg"
  },
  {
    "owner": "64f5dbafba8c17cead1fb58e",
    "make": "Aston-Martin",
    "year": 2016,
    "model": "v12-Vantage-s",
    "power": 565,
    "seller": "CarSeller",
    "kmDriven": 100000,
    "transmission": "manual",
    "location": "Texas",
    "price": 198195,
    "image": "https://media.evo.co.uk/image/private/s--e8z5J3fN--/v1556257186/evo/images/dir_1193/car_photo_596683.jpg"
  },
  {
    "owner": "64f5dbafba8c17cead1fb58e",
    "make": "Jaguar",
    "year": 2017,
    "model": "F-Pace",
    "power": 380,
    "seller": "CarSeller",
    "kmDriven": 100000,
    "transmission": "manual",
    "location": "Texas",
    "price": 56700,
    "image": "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2016/04/2017-Jaguar-F-Pace-244.jpg?crop=0.587xw:0.480xh;0.349xw,0.381xh&resize=1200:*"
  },
  {
    "owner": "64f5dbafba8c17cead1fb58e",
    "make": "Audi",
    "year": 2016,
    "model": "A3-Sportback-e-tron",
    "power": 204,
    "seller": "CarSeller",
    "kmDriven": 100000,
    "transmission": "manual",
    "location": "Texas",
    "price": 46800,
    "image": "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2016/05/2016-Audi-A3-e-tron-Sportback-101.jpg?crop=0.763xw:0.625xh;0.223xw,0.336xh&resize=1200:*"
  },
]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    return Car.deleteMany({}); //WARNING: this will delete all cras in your DB !!
  })
  .then((response) => {
    console.log(response);

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


