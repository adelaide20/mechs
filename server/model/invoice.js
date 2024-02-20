const Mongoose = require("mongoose");


const InvoiceSchema = new Mongoose.Schema({
    _appointment: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    price: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true
})


const Invoice = Mongoose.model("invoice", InvoiceSchema)


module.exports = Invoice;