const { Schema, model } = require('mongoose');


const carSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        make: String,
        model: String,
        image: String,
        price: Number,
        seller: String,
        year: {
            type: Number,
           // enum: [1990, 1991, 2023]
        },
        kmDriven: {
            type: Number,
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