const User = require('../model/users');
const Profile = require('../model/mech_profile');


// ========== CREATE MECHANIC PROFILE ==========
exports.profile = async(req, res) => {


    // 1. get mechanic profile info from the body
    const { _id, bio, language, speciality, service_fee } = req.body;

    // 2. input validation
    if (!(bio || language || speciality || service_fee)) {
        res.status(401).json({
            message: "All fields are required!"
        })
    }

    // 3. check if mechanic exists
    const checkMech = await User.findById({ _id });

    // 4. if user (mechanic) doesn't exist return error, else add profile info
    try {
        if (checkMech.role != "mechanic") {
            res.status(401).json({
                message: "User is not a mechanic",
                error: "Invalid user",
            });
        } else {
            await Profile.create({
                _user: _id,
                bio,
                language,
                speciality,
                service_fee
            }).then((profile) =>
                res.status(201).json({
                    message: "Profile successfully created",
                    profile,
                })
            );

        }
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while trying to login",
            error: error.message
        });
    }
}


// ========== GET ALL MECHANICS ==========
exports.allMechs = async(req, res) => {
    try {
        const mechanics = await User.find({ role: "mechanic" });
        res.status(200).json(mechanics);
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while getting all the mechanics",
            error: error.message
        })
    }
}


// ========== GET MECHANIC BY ID ==========
exports.mech = async(req, res) => {

}





// ========== UPDATE MECHANIC PROFILE ==========
exports.profileUpdate = async(req, res) => {

}


// ========== ADD PICTURES FOR REFERENCE ==========
exports.gallery = async(req, res) => {

}