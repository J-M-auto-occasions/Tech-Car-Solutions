const { Schema, model } = require('mongoose');


const autoSchema = new Schema(
    {
        model: String,
        image: String,
        price: Number,
        seller: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        registration: {
            type: Number,
            enum: [1990, 1991, 2023]
        },
        kmDriven: {
            type: Number,
            enum: [1000, 1000 - 5000, 200.000]
        },
        transmission: {
            type: String,
            enum: ['automatic', 'manual']
        },
        power: Number,
        location: {
            country: String,
            city: String
        }
    },
    {
        timestamps: true
    }
)

module.exports = model('Auto', autoSchema)