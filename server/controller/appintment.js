const User = require('../model/users');
const Appointment = require('../model/appointment');


// ========== CLIENT MAKE APPOINTMENT ==========
exports.addAppointment = async(req, res) => {
    const { _client, _car, _mechanic, service_type, details, date_time } = req.body;

    if (!(_client || _car || _mechanic || service_type || details || date_time)) {
        res.status(401).json({
            message: "All fields are required!"
        })
    }

    const newAppointment = new Appointment({
        _client: _client,
        _car: _car,
        _mechanic: _mechanic,
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
    const _id = req.body;

    if (!_id) {
        res.status(400);
        throw new Error('client not found');
    }

    try {
        const appointment = await Appointment.find({
            _client: _id
        })
        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({
            message: `An error occurred while getting cars for ID: ${_id}`,
            error: error.message
        })
    }
}


// ========== GET ONE APPOINTMENT ==========
exports.oneAppointment = async(req, res) => {
    const id = await Appointment.findById(req.params.id);

    try {
        if (!id) {
            res.status(400);
            throw new Error('Appointment not found');
        } else {
            const appointment = await Appointment.findById(id);
            res.status(200).json(appointment);
        }
    } catch (error) {
        res.status(500).json({
            message: `An error occurred while getting an appointment with ID: ${id}`,
            error: error.message
        })
    }
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