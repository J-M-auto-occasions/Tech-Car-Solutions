const { Schema, model } = require('mongoose');


const carSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        make: {
            type: String,
            required: true // Marked as required
        },
        model: {
            type: String,
            required: true // Marked as required
        },
        image: {
            type: String,
            // required: true // Marked as required
        },
        price: {
            type: Number,
            required: true // Marked as required
        },
        seller: {
            type: String,
            required: true // Marked as required
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