const Mongoose = require("mongoose");


// database profile schema (table in sql) 
const ProfileSchema = new Mongoose.Schema({
    _user: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    bio: {
        type: String,
        required: true,
    },
    language: [{
        type: String,
        required: true,
    }],
    speciality: [{
        type: String,
        required: true,
    }],
    service_fee: {
        type: Number,
        required: true,
    }
})


// profile model holding the schema 
const Profile = Mongoose.model("client_profile", ProfileSchema)


module.exports = Profile;