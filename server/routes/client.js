const express = require("express")
const router = express.Router()

const { addCar, allCars, oneCar } = require("../controller/client_profile");

// 1. add a car
router.post("/add", addCar);

// 2. get all cars
router.get("/all", allCars)

// 3. get a specific car info
router.get("/one/:id", oneCar)

// 4. update client profile


// 5. make an appointment


// 6. cancel appointment


// 7. add feedback

module.exports = router