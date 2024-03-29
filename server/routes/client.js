const express = require("express")
const router = express.Router()

const { addCar, allCars, oneCar } = require("../controller/client_profile");
const { addAppointment, allAppointments, oneAppointment } = require("../controller/appintment")

// 1. add a car
router.post("/add", addCar);

// 2. get all cars for a specifi client
router.get("/all/:id", allCars)

// 3. get a specific car info
router.get("/one/:id", oneCar)

// 4. update client profile


// 5. make an appointment
router.post("/app/create", addAppointment)

// 6. get all appointments for a specif client
router.get("/app/all/:id", allAppointments)

// 7. get one appointment
router.get("/app/one/:id", oneAppointment)







module.exports = router