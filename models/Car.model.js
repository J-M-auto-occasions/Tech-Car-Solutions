const { Schema, model } = require('mongoose');


const carSchema = new Schema(
    {
        model: String,
        image: String,
        price: Number,
        seller: {
            type: String
            //type: Schema.Types.ObjectId,
            //ref: "User"
        },
        registration: {
            type: Number,
           // enum: [1990, 1991, 2023]
        },
        kmDriven: {
            type: Number,
            //enum: [1000, 1000 - 5000, 200.000]
        },
        transmission: {
            type: String,
            //enum: ['automatic', 'manual']
        },
        power: Number,
        location: {
            type: String
            //country: String,
           // city: String
        }
    },
    {
        timestamps: true
    }
)

const Car = model("Car", carSchema);

module.exports = Car