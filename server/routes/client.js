const express = require("express")
const router = express.Router()

const { addCar, allCars, oneCar } = require("../controller/client_profile");
const { addAppointment, allAppointments } = require("../controller/appintment")

// 1. add a car
router.post("/add", addCar);

// 2. get all cars
router.get("/all", allCars)

// 3. get a specific car info
router.get("/one/:id", oneCar)

// 4. update client profile


// 5. make an appointment
router.post("/app/create", addAppointment)

// 6. get all appointments
router.get("/app/all", allAppointments)

// 7. cancel appointment


// 7. add feedback

module.exports = router