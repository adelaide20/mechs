const express = require("express")
const router = express.Router()

const { createInvoice, getInvoice } = require("../controller/invoice")


// 1. generate invoice
router.post("/create", createInvoice)


// 2. get an invoice for a specific appointment
router.get("/get", getInvoice)


module.exports = router