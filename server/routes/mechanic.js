const express = require("express")
const router = express.Router()

const { profile, allMechs, mech } = require("../controller/mechanic_profile");
const { appointmentStatus } = require("../controller/appintment")
const { invoice } = require("../controller/invoice")

// 1. create mechanic profile
router.post("/create", profile);

// 2. get all mechanics info
router.get("/all", allMechs);

// 3. get a specific mechanic info
router.get("/one/:id", mech);

// 4. update mechanics profile


// 5. add pictures 


// 6. accept appointment
router.put("/app/status/:id", appointmentStatus)

// 7. generate invoice
router.post("/invoice", invoice)

// 8. get all invoices


// 9. view one feedback


module.exports = router