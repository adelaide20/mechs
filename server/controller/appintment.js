const User = require('../model/users');
const Appointment = require('../model/appointment');
const Car = require('../model/car_info');
const Invoice = require('../model/invoice');


// ========== CLIENT MAKE APPOINTMENT ==========
exports.addAppointment = async(req, res) => {
    const { _client, _car, _mechanic, service_type, details, date_time } = req.body;

    if (!(_client || _car || _mechanic || service_type || details || date_time)) {
        res.status(401).json({
            message: "All fields are required!"
        })
        return
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

    const id = await User.findById(req.params.id);

    try {
        if (!id) {
            res.status(400);
            throw new Error('user not found');
        } else {
            const appointment = await Appointment.find({
                _client: id
            })

            res.status(200).json(
                appointment

            );
        }
    } catch (error) {
        res.status(500).json({
            message: `An error occurred while getting appointments for user with ID: ${id}`,
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


// ========== MECHANIC & CLIENT UPDATE APPOINTMENT STATUS ==========
// Status can either be: pending, accepted, declined, cancelled, or completed
exports.appointmentStatus = async(req, res) => {
    const id = req.params.id;
    const newStatus = req.body.status;

    // Find the appointment by its ID and update the status
    Appointment.findByIdAndUpdate(id, { status: newStatus }, { new: true })
        .then((updatedAppointment) => {
            if (updatedAppointment) {
                // Appointment found and status updated successfully
                res.status(201).json({
                    message: "Appointment status successfully updated",
                    updatedAppointment
                })
            } else {
                // Appointment not found
                res.status(404).json({ error: 'Appointment not found.' });
            }
        })
        .catch((error) => {
            // Error occurred while updating the appointment status
            console.error(error);
            res.status(500).json({ error: 'An error occurred while updating the appointment status.' });
        });
}