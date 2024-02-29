const Invoice = require('../model/invoice');
const Appointment = require('../model/appointment');


// ========== MECHANIC GENERATES INVOICE ==========
exports.createInvoice = async(req, res) => {
    const { _appointment, price } = req.body;

    if (!(_appointment, price)) {
        res.status(401).json({
            message: "All fields are required!"
        })
        return
    }

    const appointment = await Appointment.findById(_appointment);

    const newInvoice = new Invoice({
        _appointment: _appointment,
        price: price
    });

    // Save invoice to the database
    newInvoice.save()
        .then((invoice) => {
            // invoice successfully saved
            res.status(201).json({
                message: "Invoice successfully generated",
                invoice,
                appointment
            })
        })
        .catch((error) => {
            // Error occurred while saving the invoice
            console.error(error);
            res.status(500).json({ error: 'An error occurred while generating the invoice.' });
        });

}


// ========== GET AN INVOICE PER APPOINTMENT ==========
exports.getInvoice = async(req, res) => {

    const id = await Appointment.findById(req.params.id);

    try {
        if (!id) {
            res.status(400);
            throw new Error('appointment not found');
        } else {
            const invoice = await Invoice.find({
                _appointment: id
            })

            res.status(200).json(
                invoice

            );
        }
    } catch (error) {
        res.status(500).json({
            message: `An error occurred while getting invoice for appointment with ID: ${id}`,
            error: error.message
        })
    }

}


// ========== GET ALL INVOICES ==========
exports.allInvoices = async(req, res) => {

}


// ========== GET ONE INVOICE ==========
exports.oneInvoice = async(req, res) => {

}