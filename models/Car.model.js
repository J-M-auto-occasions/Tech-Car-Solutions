const { Schema, model } = require('mongoose');


const carSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        make: {
            type: String,
        },
        model: {
            type: String,
        },
        image: {
            type: String,
        },
        price: {
            type: Number,
        },
        seller: {
            type: String,
        },
        year: {
            type: Number,
        },
        kmDriven: {
            type: Number,
        },
        transmission: {
            type: [String],
        },
        power: {
            type: String,
        },
        location: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Car = model("Car", carSchema);

module.exports = Car