const User = require('../model/users');
const Appointment = require('../model/appointment');


// ========== CLIENT MAKE APPOINTMENT ==========
exports.addAppointment = async(req, res) => {
    const { client, car, mechanic, service_type, details, date_time } = req.body;

    if (!(client || car || mechanic || service_type || details || date_time)) {
        res.status(401).json({
            message: "All fields are required!"
        })
    }

    const newAppointment = new Appointment({
        _client: client,
        _car: car,
        _mechanic: mechanic,
        service_type: service_type,
        details: details,
        date_time: date_time
    });

    // Save the new appointment to the database
    newAppointment.save()
        .then((appointment) => {
            // Appointment successfully saved
            res.status(201).json({
                message: "Appointment successfully added",
                appointment
            })
        })
        .catch((error) => {
            // Error occurred while saving the appointment
            console.error(error);
            res.status(500).json({ error: 'An error occurred while creating the appointment.' });
        });
}


// ========== GET ALL APPOINTMENTS ==========
exports.allAppointments = async(req, res) => {

}


// ========== GET ONE APPOINTMENT ==========
exports.oneAppointment = async(req, res) => {

}


// ========== MECHANIC ACCEPT APPOINTMENT ==========
exports.acceptAppointment = async(req, res) => {

}


// ========== MECHANIC DECLINE APPOINTMENTS ==========
exports.declineAppointment = async(req, res) => {

}


// ========== CLIENT CANCEL APPOINTMENT ==========
exports.cancelAppointment = async(req, res) => {

}