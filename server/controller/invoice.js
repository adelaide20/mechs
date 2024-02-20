const Invoice = require('../model/invoice');
const Appointment = require('../model/appointment');


// ========== MECHANIC GENERATES INVOICE ==========
exports.invoice = async(req, res) => {
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


// ========== GET ALL INVOICES ==========
exports.allInvoices = async(req, res) => {

}


// ========== GET ONE INVOICE ==========
exports.oneInvoice = async(req, res) => {

}