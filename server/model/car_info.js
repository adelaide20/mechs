const Mongoose = require("mongoose");


const CarSchema = new Mongoose.Schema({
    _user: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    model: {
        type: String,
        required: true,
    },
    make: {
        type: String,
        required: true,
    },
    registration: {
        type: String,
        required: true,
    },
    fuel_type: {
        type: String,
        required: true,
    },
})


const Car = Mongoose.model("cars", CarSchema)


module.exports = Car;