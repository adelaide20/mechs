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
        await User.find({ role: "mechanic" })
            .then(async(mec_info) => {
                // Extracting _user values from  Users (mechanic info)
                const mechanicIds = mec_info.map((user) => user._id);

                // Using $lookup to join Users (mechanic info) with Profile (mechanic_profiles) collection based on _user field
                const result = await User.aggregate([{
                        $match: { _id: { $in: mechanicIds } } // Filtering users by their IDs
                    },
                    {
                        $lookup: {
                            from: "mechanic_profiles", // Profile collection is "mechanic_profiles"
                            localField: "_id",
                            foreignField: "_user",
                            as: "profile"
                        }
                    }
                ]);

                // Mapping the result to match the original format
                const combinedData = result.map((user) => ({
                    "Mechanic Info": user,
                }));

                res.json(combinedData);
            })
            .catch((error) => {
                console.log(error);
            });

    } catch (error) {
        res.status(500).json({
            message: "An error occurred while getting all the mechanics",
            error: error.message
        })
    }
}


// ========== GET MECHANIC BY ID ==========
exports.mech = async(req, res) => {
    const id = await Profile.findById(req.params.id);

    if (!id) {
        res.status(400);
        throw new Error('mechanic not found');
    }

    try {
        const mechanic = await Profile.find({ id });
        res.status(200).json(mechanic);
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while getting all the mechanics",
            error: error.message
        })
    }
}





// ========== UPDATE MECHANIC PROFILE ==========
exports.profileUpdate = async(req, res) => {

}


// ========== ADD PICTURES FOR REFERENCE ==========
exports.gallery = async(req, res) => {

}