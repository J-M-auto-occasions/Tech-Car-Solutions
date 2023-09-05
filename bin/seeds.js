const mongoose = require('mongoose');
const Car = require('../models/Car.model');

require('dotenv').config(); // import and configure dotenv (loads environment variables from .env file)

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tech-car-solutions';

//this is a large list of cars
const cars = [
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
    "power": 279,
    "make": "acura",
    "model": "rdx",
    "price": 40370,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 377,
    "make": "acura",
    "model": "rlx",
    "price": 65950,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 290,
    "make": "acura",
    "model": "tlx",
    "price": 44800,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 237,
    "make": "alfa-romeo",
    "model": "4c",
    "price": 55900,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 237,
    "make": "alfa-romeo",
    "model": "4c-spider",
    "price": 63900,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 540,
    "make": "aston-martin",
    "model": "db9-gt",
    "price": 198250,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 552,
    "make": "aston-martin",
    "model": "rapide-s",
    "price": 206000,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 565,
    "make": "aston-martin",
    "model": "v12-vantage-s",
    "price": 198195,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },/*
  {
    "year": 2016,

    "power": 430,
    "make": "aston-martin",
    "model": "v8-vantage",
    "price": 109000,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 568,
    "make": "aston-martin",
    "model": "vanquish",
    "price": 287650,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 150,
    "make": "audi",
    "model": "a3",
    "price": 42050,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 204,
    "make": "audi",
    "model": "a3-sportback-e-tron",
    "price": 46800,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 252,
    "make": "audi",
    "model": "a4",
    "price": 41100,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 252,
    "make": "audi",
    "model": "a6",
    "price": 52100,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 333,
    "make": "audi",
    "model": "a7",
    "price": 70950,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 450,
    "make": "audi",
    "model": "a8",
    "price": 90500,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 200,
    "make": "audi",
    "model": "q3",
    "price": 33700,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 220,
    "make": "audi",
    "model": "q5",
    "price": 40900,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 333,
    "make": "audi",
    "model": "q7",
    "price": 58800,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 540,
    "make": "audi",
    "model": "r8",
    "price": 162900,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 450,
    "make": "audi",
    "model": "rs-5",
    "price": 79200,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 560,
    "make": "audi",
    "model": "rs-7",
    "price": 108900,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 292,
    "make": "audi",
    "model": "s3",
    "price": 48650,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 333,
    "make": "audi",
    "model": "s4",
    "price": 55100,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 333,
    "make": "audi",
    "model": "s5",
    "price": 59350,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 450,
    "make": "audi",
    "model": "s6",
    "price": 75300,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 450,
    "make": "audi",
    "model": "s7",
    "price": 82900,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 605,
    "make": "audi",
    "model": "s8",
    "price": 114900,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 354,
    "make": "audi",
    "model": "sq5",
    "price": 60800,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 220,
    "make": "audi",
    "model": "tt",
    "price": 46400,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 292,
    "make": "audi",
    "model": "tts",
    "price": 51900,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 220,
    "make": "audi",
    "model": "allroad",
    "price": 42700,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 240,
    "make": "bmw",
    "model": "2-series",
    "price": 38650,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 240,
    "make": "bmw",
    "model": "3-series",
    "price": 38350,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 300,
    "make": "bmw",
    "model": "3-series-gran-turismo",
    "price": 49200,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 300,
    "make": "bmw",
    "model": "4-series",
    "price": 56950,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 300,
    "make": "bmw",
    "model": "4-series-gran-coupe",
    "price": 49950,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 443,
    "make": "bmw",
    "model": "5-series",
    "price": 68600,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 300,
    "make": "bmw",
    "model": "5-series-gran-turismo",
    "price": 63200,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 315,
    "make": "bmw",
    "model": "6-series",
    "price": 77300,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 315,
    "make": "bmw",
    "model": "6-series-gran-coupe",
    "price": 82500,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 445,
    "make": "bmw",
    "model": "7-series",
    "price": 94400,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 600,
    "make": "bmw",
    "model": "alpina-b6-gran-coupe",
    "price": 122200,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 540,
    "make": "bmw",
    "model": "alpina-b7",
    "price": 132200,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 335,
    "make": "bmw",
    "model": "activehybrid-5",
    "price": 62100,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 335,
    "make": "bmw",
    "model": "activehybrid-7",
    "price": 84300,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 365,
    "make": "bmw",
    "model": "m2",
    "price": 51700,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 425,
    "make": "bmw",
    "model": "m3",
    "price": 63500,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 425,
    "make": "bmw",
    "model": "m4",
    "price": 65700,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 560,
    "make": "bmw",
    "model": "m5",
    "price": 94100,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 552,
    "make": "bmw",
    "model": "m6",
    "price": 113400,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 552,
    "make": "bmw",
    "model": "m6-gran-coupe",
    "price": 117200,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 228,
    "make": "bmw",
    "model": "x1",
    "price": 34800,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 300,
    "make": "bmw",
    "model": "x3",
    "price": 46800,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 360,
    "make": "bmw",
    "model": "x4",
    "price": 57800,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 445,
    "make": "bmw",
    "model": "x5",
    "price": 71500,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 567,
    "make": "bmw",
    "model": "x5-m",
    "price": 98800,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 240,
    "make": "bmw",
    "model": "x5-edrive",
    "price": 62100,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 300,
    "make": "bmw",
    "model": "x6",
    "price": 60600,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 567,
    "make": "bmw",
    "model": "x6-m",
    "price": 102200,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 335,
    "make": "bmw",
    "model": "z4",
    "price": 66350,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 170,
    "make": "bmw",
    "model": "i3",
    "price": 42400,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 357,
    "make": "bmw",
    "model": "i8",
    "price": 140700,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 500,
    "make": "bentley",
    "model": "continental-gt",
    "price": 187900,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 616,
    "make": "bentley",
    "model": "flying-spur",
    "price": 215800,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 505,
    "make": "bentley",
    "model": "mulsanne",
    "price": 303700,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 200,
    "make": "buick",
    "model": "cascada",
    "price": 33065,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 259,
    "make": "buick",
    "model": "regal",
    "price": 31415,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 250,
    "make": "buick",
    "model": "verano",
    "price": 28670,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 202,
    "make": "cadillac",
    "model": "ats",
    "price": 33215,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 272,
    "make": "cadillac",
    "model": "ats-coupe",
    "price": 47445,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 464,
    "make": "cadillac",
    "model": "ats-v",
    "price": 62665,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 335,
    "make": "cadillac",
    "model": "ct6",
    "price": 63570,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 268,
    "make": "cadillac",
    "model": "cts",
    "price": 56285,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 640,
    "make": "cadillac",
    "model": "cts-v",
    "price": 83995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 556,
    "make": "cadillac",
    "model": "cts-v-coupe",
    "price": 69900,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 233,
    "make": "cadillac",
    "model": "elr",
    "price": 65000,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 420,
    "make": "cadillac",
    "model": "escalade",
    "price": 79645,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 420,
    "make": "cadillac",
    "model": "escalade-esv",
    "price": 78570,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 308,
    "make": "cadillac",
    "model": "srx",
    "price": 46135,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 310,
    "make": "cadillac",
    "model": "xt5",
    "price": 44895,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 410,
    "make": "cadillac",
    "model": "xts",
    "price": 72320,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 455,
    "make": "chevrolet",
    "model": "camaro",
    "price": 36300,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 131,
    "make": "chevrolet",
    "model": "city-express",
    "price": 23515,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 305,
    "make": "chevrolet",
    "model": "colorado",
    "price": 30305,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 460,
    "make": "chevrolet",
    "model": "corvette",
    "price": 64855,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 153,
    "make": "chevrolet",
    "model": "cruze",
    "price": 23120,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 138,
    "make": "chevrolet",
    "model": "cruze-limited",
    "price": 20195,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 285,
    "make": "chevrolet",
    "model": "express",
    "price": 37155,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 285,
    "make": "chevrolet",
    "model": "express-cargo",
    "price": 30595,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 195,
    "make": "chevrolet",
    "model": "impala",
    "price": 29460,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 163,
    "make": "chevrolet",
    "model": "malibu",
    "price": 21625,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 197,
    "make": "chevrolet",
    "model": "malibu-limited",
    "price": 22565,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 415,
    "make": "chevrolet",
    "model": "ss",
    "price": 46575,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 355,
    "make": "chevrolet",
    "model": "silverado-1500",
    "price": 40950,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 138,
    "make": "chevrolet",
    "model": "sonic",
    "price": 17545,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 98,
    "make": "chevrolet",
    "model": "spark",
    "price": 12660,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 140,
    "make": "chevrolet",
    "model": "spark-ev",
    "price": 25510,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 360,
    "make": "chevrolet",
    "model": "suburban",
    "price": 79715,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 355,
    "make": "chevrolet",
    "model": "tahoe",
    "price": 50000,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 138,
    "make": "chevrolet",
    "model": "trax",
    "price": 25230,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 295,
    "make": "chrysler",
    "model": "200",
    "price": 29905,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 292,
    "make": "chrysler",
    "model": "300",
    "price": 34515,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 287,
    "make": "chrysler",
    "model": "pacifica",
    "price": 34495,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 485,
    "make": "dodge",
    "model": "challenger",
    "price": 37995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 292,
    "make": "dodge",
    "model": "charger",
    "price": 31995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 184,
    "make": "dodge",
    "model": "dart",
    "price": 22095,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 293,
    "make": "dodge",
    "model": "durango",
    "price": 39595,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 283,
    "make": "dodge",
    "model": "grand-caravan",
    "price": 27795,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 283,
    "make": "dodge",
    "model": "journey",
    "price": 29795,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 645,
    "make": "dodge",
    "model": "viper",
    "price": 107995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 135,
    "make": "fiat",
    "model": "500",
    "price": 19700,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 160,
    "make": "fiat",
    "model": "500l",
    "price": 24795,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 180,
    "make": "fiat",
    "model": "500x",
    "price": 29110,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 597,
    "make": "ferrari",
    "model": "458-italia",
    "price": 291744,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 553,
    "make": "ferrari",
    "model": "california-t",
    "price": 198973,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 731,
    "make": "ferrari",
    "model": "f12-berlinetta",
    "price": 319995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 651,
    "make": "ferrari",
    "model": "ff",
    "price": 295000,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 188,
    "make": "ford",
    "model": "c-max-energi",
    "price": 31770,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 188,
    "make": "ford",
    "model": "c-max-hybrid",
    "price": 27170,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 245,
    "make": "ford",
    "model": "edge",
    "price": 37595,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 168,
    "make": "ford",
    "model": "escape",
    "price": 23600,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 290,
    "make": "ford",
    "model": "explorer",
    "price": 43300,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 440,
    "make": "ford",
    "model": "f-450-super-duty",
    "price": 53060,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 197,
    "make": "ford",
    "model": "fiesta",
    "price": 21460,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 287,
    "make": "ford",
    "model": "flex",
    "price": 39750,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 350,
    "make": "ford",
    "model": "focus-rs",
    "price": 35730,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 252,
    "make": "ford",
    "model": "focus-st",
    "price": 24425,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 325,
    "make": "ford",
    "model": "fusion",
    "price": 33360,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 188,
    "make": "ford",
    "model": "fusion-energi",
    "price": 33120,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 188,
    "make": "ford",
    "model": "fusion-hybrid",
    "price": 37020,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 435,
    "make": "ford",
    "model": "mustang",
    "price": 36395,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 526,
    "make": "ford",
    "model": "shelby-gt350",
    "price": 47795,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 288,
    "make": "ford",
    "model": "taurus",
    "price": 29540,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 169,
    "make": "ford",
    "model": "transit-connect",
    "price": 24200,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 310,
    "make": "ford",
    "model": "transit-van",
    "price": 41690,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 310,
    "make": "ford",
    "model": "transit-wagon",
    "price": 43995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 194,
    "make": "gmc",
    "model": "acadia",
    "price": 29070,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 305,
    "make": "gmc",
    "model": "canyon",
    "price": 30405,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 260,
    "make": "gmc",
    "model": "savana",
    "price": 50095,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 260,
    "make": "gmc",
    "model": "savana-cargo",
    "price": 44400,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 360,
    "make": "gmc",
    "model": "sierra-2500hd",
    "price": 38865,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 360,
    "make": "gmc",
    "model": "sierra-3500hd",
    "price": 37960,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 182,
    "make": "gmc",
    "model": "terrain",
    "price": 23975,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 355,
    "make": "gmc",
    "model": "yukon",
    "price": 59850,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 355,
    "make": "gmc",
    "model": "yukon-xl",
    "price": 50865,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 185,
    "make": "honda",
    "model": "accord",
    "price": 27380,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 196,
    "make": "honda",
    "model": "accord-hybrid",
    "price": 35055,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 185,
    "make": "honda",
    "model": "cr-v",
    "price": 28445,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 130,
    "make": "honda",
    "model": "cr-z",
    "price": 25090,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 278,
    "make": "honda",
    "model": "crosstour",
    "price": 35940,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 130,
    "make": "honda",
    "model": "fit",
    "price": 18600,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 141,
    "make": "honda",
    "model": "hr-v",
    "price": 21265,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 280,
    "make": "honda",
    "model": "pilot",
    "price": 31945,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 137,
    "make": "hyundai",
    "model": "accent",
    "price": 16195,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 293,
    "make": "hyundai",
    "model": "azera",
    "price": 34100,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 147,
    "make": "hyundai",
    "model": "elantra",
    "price": 22350,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 173,
    "make": "hyundai",
    "model": "elantra-gt",
    "price": 19800,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 429,
    "make": "hyundai",
    "model": "equus",
    "price": 61500,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 420,
    "make": "hyundai",
    "model": "genesis",
    "price": 53850,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 348,
    "make": "hyundai",
    "model": "genesis-coupe",
    "price": 28150,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 290,
    "make": "hyundai",
    "model": "santa-fe",
    "price": 38700,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 265,
    "make": "hyundai",
    "model": "santa-fe-sport",
    "price": 36500,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 178,
    "make": "hyundai",
    "model": "sonata",
    "price": 23725,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 193,
    "make": "hyundai",
    "model": "sonata-hybrid",
    "price": 30100,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 202,
    "make": "hyundai",
    "model": "sonata-plug-in-hybrid",
    "price": 38600,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 175,
    "make": "hyundai",
    "model": "tucson",
    "price": 31300,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 201,
    "make": "hyundai",
    "model": "veloster",
    "price": 22600,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 328,
    "make": "infiniti",
    "model": "q40",
    "price": 35550,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 208,
    "make": "infiniti",
    "model": "q50",
    "price": 33950,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 325,
    "make": "infiniti",
    "model": "q60-convertible",
    "price": 48550,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 330,
    "make": "infiniti",
    "model": "q70",
    "price": 49850,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 325,
    "make": "infiniti",
    "model": "qx50",
    "price": 35850,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 250,
    "make": "infiniti",
    "model": "qx60",
    "price": 52050,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 325,
    "make": "infiniti",
    "model": "qx70",
    "price": 45850,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 400,
    "make": "infiniti",
    "model": "qx80",
    "price": 63250,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 380,
    "make": "jaguar",
    "model": "f-pace",
    "price": 56700,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 340,
    "make": "jaguar",
    "model": "f-type",
    "price": 62700,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 340,
    "make": "jaguar",
    "model": "xe",
    "price": 44200,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 180,
    "make": "jaguar",
    "model": "xf",
    "price": 54200,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 340,
    "make": "jaguar",
    "model": "xj",
    "price": 74400,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 385,
    "make": "jaguar",
    "model": "xk",
    "price": 90500,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 184,
    "make": "jeep",
    "model": "cherokee",
    "price": 27875,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 158,
    "make": "jeep",
    "model": "compass",
    "price": 19595,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 290,
    "make": "jeep",
    "model": "grand-cherokee",
    "price": 46690,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 475,
    "make": "jeep",
    "model": "grand-cherokee-srt",
    "price": 65495,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 172,
    "make": "jeep",
    "model": "patriot",
    "price": 19595,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 160,
    "make": "jeep",
    "model": "renegade",
    "price": 21395,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 201,
    "make": "kia",
    "model": "forte",
    "price": 21690,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 311,
    "make": "kia",
    "model": "k900",
    "price": 54900,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 185,
    "make": "kia",
    "model": "optima",
    "price": 21990,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 199,
    "make": "kia",
    "model": "optima-hybrid",
    "price": 25995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 138,
    "make": "kia",
    "model": "rio",
    "price": 14165,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 276,
    "make": "kia",
    "model": "sedona",
    "price": 32700,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 290,
    "make": "kia",
    "model": "sorento",
    "price": 43300,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 164,
    "make": "kia",
    "model": "soul",
    "price": 19300,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 181,
    "make": "kia",
    "model": "sportage",
    "price": 24490,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 720,
    "make": "lamborghini",
    "model": "aventador",
    "price": 548800,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 610,
    "make": "lamborghini",
    "model": "huracan",
    "price": 237250,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 240,
    "make": "land-rover",
    "model": "discovery-sport",
    "price": 37455,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 240,
    "make": "land-rover",
    "model": "lr2",
    "price": 41700,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 340,
    "make": "land-rover",
    "model": "lr4",
    "price": 55300,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 254,
    "make": "land-rover",
    "model": "range-rover",
    "price": 86450,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 240,
    "make": "land-rover",
    "model": "range-rover-evoque",
    "price": 50475,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 510,
    "make": "land-rover",
    "model": "range-rover-sport",
    "price": 93295,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 134,
    "make": "lexus",
    "model": "ct-200h",
    "price": 31250,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 200,
    "make": "lexus",
    "model": "es-300h",
    "price": 41020,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 268,
    "make": "lexus",
    "model": "es-350",
    "price": 38100,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 241,
    "make": "lexus",
    "model": "gs-200t",
    "price": 45615,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 311,
    "make": "lexus",
    "model": "gs-350",
    "price": 50000,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 338,
    "make": "lexus",
    "model": "gs-450h",
    "price": 63080,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 467,
    "make": "lexus",
    "model": "gs-f",
    "price": 84440,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 301,
    "make": "lexus",
    "model": "gx-460",
    "price": 62155,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 241,
    "make": "lexus",
    "model": "is-200t",
    "price": 37325,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 204,
    "make": "lexus",
    "model": "is-250",
    "price": 43690,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 204,
    "make": "lexus",
    "model": "is-250-c",
    "price": 43360,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 255,
    "make": "lexus",
    "model": "is-300",
    "price": 39700,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 306,
    "make": "lexus",
    "model": "is-350",
    "price": 43035,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 306,
    "make": "lexus",
    "model": "is-350-c",
    "price": 47640,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 360,
    "make": "lexus",
    "model": "ls-460",
    "price": 75465,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 438,
    "make": "lexus",
    "model": "ls-600h-l",
    "price": 120440,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 383,
    "make": "lexus",
    "model": "lx-570",
    "price": 88880,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 235,
    "make": "lexus",
    "model": "nx-200t",
    "price": 34965,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 194,
    "make": "lexus",
    "model": "nx-300h",
    "price": 39720,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 241,
    "make": "lexus",
    "model": "rc-200t",
    "price": 39995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 255,
    "make": "lexus",
    "model": "rc-300",
    "price": 42610,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 306,
    "make": "lexus",
    "model": "rc-350",
    "price": 42780,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 467,
    "make": "lexus",
    "model": "rc-f",
    "price": 62805,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 295,
    "make": "lexus",
    "model": "rx-350",
    "price": 41900,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 308,
    "make": "lexus",
    "model": "rx-450h",
    "price": 52235,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 240,
    "make": "lincoln",
    "model": "mkc",
    "price": 32720,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 350,
    "make": "lincoln",
    "model": "mks",
    "price": 39010,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 365,
    "make": "lincoln",
    "model": "mkt",
    "price": 45365,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 303,
    "make": "lincoln",
    "model": "mkx",
    "price": 45315,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 365,
    "make": "lincoln",
    "model": "navigator",
    "price": 66770,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 134,
    "make": "mini",
    "model": "cooper",
    "price": 21700,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 134,
    "make": "mini",
    "model": "cooper-clubman",
    "price": 24100,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 208,
    "make": "mini",
    "model": "cooper-countryman",
    "price": 35350,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 121,
    "make": "mini",
    "model": "cooper-coupe",
    "price": 22000,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 121,
    "make": "mini",
    "model": "cooper-paceman",
    "price": 23550,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 208,
    "make": "mini",
    "model": "cooper-roadster",
    "price": 36250,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 345,
    "make": "maserati",
    "model": "ghibli",
    "price": 70600,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 454,
    "make": "maserati",
    "model": "granturismo",
    "price": 165627,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 454,
    "make": "maserati",
    "model": "granturismo-convertible",
    "price": 182009,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 523,
    "make": "maserati",
    "model": "quattroporte",
    "price": 141500,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 155,
    "make": "mazda",
    "model": "3",
    "price": 19595,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 157,
    "make": "mazda",
    "model": "5",
    "price": 21240,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 184,
    "make": "mazda",
    "model": "6",
    "price": 21495,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 146,
    "make": "mazda",
    "model": "cx-3",
    "price": 21210,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 184,
    "make": "mazda",
    "model": "cx-5",
    "price": 25215,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 155,
    "make": "mazda",
    "model": "mx-5-miata",
    "price": 24915,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 641,
    "make": "mclaren",
    "model": "650s-coupe",
    "price": 265500,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 641,
    "make": "mclaren",
    "model": "650s-spider",
    "price": 280225,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 503,
    "make": "mercedes-benz",
    "model": "amg-gt",
    "price": 129900,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 177,
    "make": "mercedes-benz",
    "model": "b-class-electric-drive",
    "price": 41450,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 208,
    "make": "mercedes-benz",
    "model": "cla-class",
    "price": 34050,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 577,
    "make": "mercedes-benz",
    "model": "cls-class",
    "price": 107800,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 416,
    "make": "mercedes-benz",
    "model": "g-class",
    "price": 119900,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 550,
    "make": "mercedes-benz",
    "model": "gl-class",
    "price": 119450,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 208,
    "make": "mercedes-benz",
    "model": "gla-class",
    "price": 34500,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 241,
    "make": "mercedes-benz",
    "model": "glc-class",
    "price": 38950,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 302,
    "make": "mercedes-benz",
    "model": "gle-class",
    "price": 51100,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 362,
    "make": "mercedes-benz",
    "model": "gle-class-coupe",
    "price": 65100,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 200,
    "make": "mercedes-benz",
    "model": "glk-class",
    "price": 39400,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 523,
    "make": "mercedes-benz",
    "model": "maybach",
    "price": 189350,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 208,
    "make": "mercedes-benz",
    "model": "metris",
    "price": 32500,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 329,
    "make": "mercedes-benz",
    "model": "sl-class",
    "price": 85050,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 302,
    "make": "mercedes-benz",
    "model": "slk-class",
    "price": 59200,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 583,
    "make": "mercedes-benz",
    "model": "sls-amg-gt-final-edition",
    "price": 228080,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 161,
    "make": "mercedes-benz",
    "model": "sprinter",
    "price": 44000,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 161,
    "make": "mercedes-benz",
    "model": "sprinter-worker",
    "price": 32495,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 168,
    "make": "mitsubishi",
    "model": "lancer",
    "price": 22495,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 303,
    "make": "mitsubishi",
    "model": "lancer-evolution",
    "price": 37995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 78,
    "make": "mitsubishi",
    "model": "mirage",
    "price": 16495,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 78,
    "make": "mitsubishi",
    "model": "mirage-g4",
    "price": 13995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 224,
    "make": "mitsubishi",
    "model": "outlander",
    "price": 30995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 148,
    "make": "mitsubishi",
    "model": "outlander-sport",
    "price": 20795,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 66,
    "make": "mitsubishi",
    "model": "i-miev",
    "price": 22995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 350,
    "make": "nissan",
    "model": "370z",
    "price": 45490,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 270,
    "make": "nissan",
    "model": "altima",
    "price": 32690,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 261,
    "make": "nissan",
    "model": "frontier",
    "price": 32080,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 600,
    "make": "nissan",
    "model": "gt-r",
    "price": 149990,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 188,
    "make": "nissan",
    "model": "juke",
    "price": 26940,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 300,
    "make": "nissan",
    "model": "maxima",
    "price": 39960,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 260,
    "make": "nissan",
    "model": "murano",
    "price": 31260,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 317,
    "make": "nissan",
    "model": "nv-cargo",
    "price": 30640,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 317,
    "make": "nissan",
    "model": "nv-passenger",
    "price": 39810,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 131,
    "make": "nissan",
    "model": "nv200",
    "price": 20870,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 260,
    "make": "nissan",
    "model": "pathfinder",
    "price": 36410,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 260,
    "make": "nissan",
    "model": "quest",
    "price": 26580,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 170,
    "make": "nissan",
    "model": "rogue",
    "price": 28690,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 170,
    "make": "nissan",
    "model": "rogue-select",
    "price": 21500,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 130,
    "make": "nissan",
    "model": "sentra",
    "price": 22170,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 310,
    "make": "nissan",
    "model": "titan-xd",
    "price": 43290,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 109,
    "make": "nissan",
    "model": "versa",
    "price": 11990,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 109,
    "make": "nissan",
    "model": "versa-note",
    "price": 17980,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 261,
    "make": "nissan",
    "model": "xterra",
    "price": 31640,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 350,
    "make": "porsche",
    "model": "718-boxster",
    "price": 68400,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 420,
    "make": "porsche",
    "model": "911",
    "price": 122600,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 887,
    "make": "porsche",
    "model": "918-spyder",
    "price": 929000,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 375,
    "make": "porsche",
    "model": "boxster",
    "price": 82100,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 570,
    "make": "porsche",
    "model": "cayenne",
    "price": 157300,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 340,
    "make": "porsche",
    "model": "cayman",
    "price": 75200,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2017,

    "power": 340,
    "make": "porsche",
    "model": "macan",
    "price": 54400,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 520,
    "make": "porsche",
    "model": "panamera",
    "price": 141300,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 395,
    "make": "ram",
    "model": "1500",
    "price": 45430,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 383,
    "make": "ram",
    "model": "3500",
    "price": 32285,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 283,
    "make": "ram",
    "model": "cv-tradesman",
    "price": 22500,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 280,
    "make": "ram",
    "model": "promaster-cargo-van",
    "price": 30630,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 178,
    "make": "ram",
    "model": "promaster-city",
    "price": 23445,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 280,
    "make": "ram",
    "model": "promaster-window-van",
    "price": 34150,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 563,
    "make": "rolls-royce",
    "model": "dawn",
    "price": 335000,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 563,
    "make": "rolls-royce",
    "model": "ghost-series-ii",
    "price": 295850,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 453,
    "make": "rolls-royce",
    "model": "phantom",
    "price": 492425,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 453,
    "make": "rolls-royce",
    "model": "phantom-coupe",
    "price": 449525,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 453,
    "make": "rolls-royce",
    "model": "phantom-drophead-coupe",
    "price": 492000,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 624,
    "make": "rolls-royce",
    "model": "wraith",
    "price": 304350,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 200,
    "make": "scion",
    "model": "fr-s",
    "price": 30610,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 106,
    "make": "scion",
    "model": "ia",
    "price": 15700,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 137,
    "make": "scion",
    "model": "im",
    "price": 19200,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 94,
    "make": "scion",
    "model": "iq",
    "price": 15665,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 179,
    "make": "scion",
    "model": "tc",
    "price": 20535,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 158,
    "make": "scion",
    "model": "xb",
    "price": 19685,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 200,
    "make": "subaru",
    "model": "brz",
    "price": 25395,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 160,
    "make": "subaru",
    "model": "crosstrek",
    "price": 26395,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 170,
    "make": "subaru",
    "model": "forester",
    "price": 25295,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 175,
    "make": "subaru",
    "model": "legacy",
    "price": 21745,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 175,
    "make": "subaru",
    "model": "outback",
    "price": 25295,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 305,
    "make": "subaru",
    "model": "wrx",
    "price": 39995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 160,
    "make": "subaru",
    "model": "xv-crosstrek",
    "price": 25995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 270,
    "make": "toyota",
    "model": "4runner",
    "price": 41850,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 268,
    "make": "toyota",
    "model": "avalon",
    "price": 35850,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 200,
    "make": "toyota",
    "model": "avalon-hybrid",
    "price": 38100,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 178,
    "make": "toyota",
    "model": "camry",
    "price": 23840,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 200,
    "make": "toyota",
    "model": "camry-hybrid",
    "price": 30140,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 132,
    "make": "toyota",
    "model": "corolla",
    "price": 20065,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 280,
    "make": "toyota",
    "model": "highlander-hybrid",
    "price": 50485,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 381,
    "make": "toyota",
    "model": "land-cruiser",
    "price": 83825,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 153,
    "make": "toyota",
    "model": "mirai",
    "price": 57500,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 121,
    "make": "toyota",
    "model": "prius",
    "price": 28650,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 134,
    "make": "toyota",
    "model": "prius-plug-in",
    "price": 34905,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 99,
    "make": "toyota",
    "model": "prius-c",
    "price": 19560,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 134,
    "make": "toyota",
    "model": "prius-v",
    "price": 28060,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 176,
    "make": "toyota",
    "model": "rav4",
    "price": 29265,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 194,
    "make": "toyota",
    "model": "rav4-hybrid",
    "price": 28370,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 381,
    "make": "toyota",
    "model": "sequoia",
    "price": 57340,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 266,
    "make": "toyota",
    "model": "sienna",
    "price": 37620,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 159,
    "make": "toyota",
    "model": "tacoma",
    "price": 28460,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 381,
    "make": "toyota",
    "model": "tundra",
    "price": 46530,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2015,

    "power": 181,
    "make": "toyota",
    "model": "venza",
    "price": 33560,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 106,
    "make": "toyota",
    "model": "yaris",
    "price": 16930,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 210,
    "make": "volkswagen",
    "model": "beetle",
    "price": 27095,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 210,
    "make": "volkswagen",
    "model": "beetle-convertible",
    "price": 29790,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 200,
    "make": "volkswagen",
    "model": "cc",
    "price": 34475,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 200,
    "make": "volkswagen",
    "model": "eos",
    "price": 31995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 170,
    "make": "volkswagen",
    "model": "golf",
    "price": 18495,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 210,
    "make": "volkswagen",
    "model": "golf-gti",
    "price": 29125,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 292,
    "make": "volkswagen",
    "model": "golf-r",
    "price": 38995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 170,
    "make": "volkswagen",
    "model": "golf-sportwagen",
    "price": 27025,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 210,
    "make": "volkswagen",
    "model": "jetta",
    "price": 28020,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 170,
    "make": "volkswagen",
    "model": "passat",
    "price": 22440,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 280,
    "make": "volkswagen",
    "model": "touareg",
    "price": 42705,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 115,
    "make": "volkswagen",
    "model": "e-golf",
    "price": 28995,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 302,
    "make": "volvo",
    "model": "s60",
    "price": 39450,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 240,
    "make": "volvo",
    "model": "s80",
    "price": 48375,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 240,
    "make": "volvo",
    "model": "v60",
    "price": 36150,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 250,
    "make": "volvo",
    "model": "v60-cross-country",
    "price": 41200,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 325,
    "make": "volvo",
    "model": "xc60",
    "price": 46950,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 240,
    "make": "volvo",
    "model": "xc70",
    "price": 41550,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  },
  {
    "year": 2016,

    "power": 400,
    "make": "volvo",
    "model": "xc90",
    "price": 68100,
    "image": "https://hips.hearstapps.com/hmg-prod/images/dsc05984-649d90d2c4d47.jpg?crop=0.538xw:0.404xh;0.322xw,0.442xh&resize=1200:*"
  }*/
]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);

    return Car.deleteMany({}); //WARNING: this will delete all books in your DB !!
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


