const Mongoose = require("mongoose");


const CarSchema = new Mongoose.Schema({
    _user: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    registration: {
        type: String,
        unique: true,
        required: true,
    },
    fuel_type: {
        type: String,
        required: true,
    },
})


const Car = Mongoose.model("cars", CarSchema)


module.exports = Car;