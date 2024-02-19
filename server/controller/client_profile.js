const User = require('../model/users');
const Car = require('../model/car_info');

// ========== ADD CAR ==========
exports.addCar = async(req, res) => {

    const { _id, make, model, registration, fuel_type } = req.body;

    if (!(_id || make || model || registration || fuel_type)) {
        res.status(401).json({
            message: "All fields are required!"
        })
    }


    const checkUser = await User.findById({ _id });


    try {
        if (checkUser.role != "client") {
            res.status(401).json({
                message: "User is not a client",
                error: "Invalid user",
            });
        } else {
            await Car.create({
                _user: _id,
                model,
                make,
                registration,
                fuel_type
            }).then((car_info) =>
                res.status(201).json({
                    message: "Car info successfully added",
                    car_info,
                })
            );

        }
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while trying to add car info",
            error: error.message
        });
    }
}



// ========== GET ALL CARS ==========
exports.allCars = async(req, res) => {

    const _id = req.body;

    try {
        const cars = await Car.find({
            _user: _id
        })
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({
            message: `An error occurred while getting cars for ID: ${_id}`,
            error: error.message
        })
    }
}



// ========== GET ONE CAR ==========
exports.oneCar = async(req, res) => {

}



// ========== UPDATE CLIENT PROFILE ==========
exports.updateProfile = async(req, res) => {

}