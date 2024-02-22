const User = require('../model/users');
const Profile = require('../model/mech_profile');

let mechanics_data = [];



// ========== CREATE MECHANIC PROFILE ==========
exports.profile = async(req, res) => {


    // 1. get mechanic profile info from the body
    const { _id, bio, language, speciality, service_fee } = req.body;

    // 2. input validation
    if (!(_id || bio || language || speciality || service_fee)) {
        res.status(401).json({
            message: "All fields are required!"
        })
        return
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
            message: "An error occurred while trying to create a mechanic profile",
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
                    "mechanic": user,
                }));

                res.json(combinedData);

                // Pushing combinedData into mechanics_data array
                await mechanics_data.push(...combinedData)
            })
            .catch((error) => {
                res.status(500).json({
                    message: "An error occurred while getting all the mechanics",
                    error: error.message
                })
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
    const id = req.params.id;

    // Using find to search for the specific ID
    const foundData = await mechanics_data.find((data) => data["mechanic"]._id.toString() === id);


    // Checking if the ID was found
    if (foundData) {
        // The specific ID was found, foundData now contains the corresponding combined data
        res.json({
            "foundData": foundData
        });
    } else {
        // The specific ID was not found
        res.json({
            "Data not found for ID": id
        });
    }
}





// ========== UPDATE MECHANIC PROFILE ==========
exports.profileUpdate = async(req, res) => {

}


// ========== ADD PICTURES FOR REFERENCE ==========
exports.gallery = async(req, res) => {

}