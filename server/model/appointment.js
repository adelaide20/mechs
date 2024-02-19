const Mongoose = require("mongoose");


const AppointmentSchema = new Mongoose.Schema({
    _client: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    _car: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "Car"
    },
    _mechanic: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    service_type: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
    }
}, {
    timestamps: true
})


const Appointment = Mongoose.model("appointment", AppointmentSchema)


module.exports = Appointment;