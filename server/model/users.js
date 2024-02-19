const Mongoose = require("mongoose");
const bcrypt = require("bcrypt");


// database user schema (table in sql) 
const UserSchema = new Mongoose.Schema({
    full_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    contact_no: {
        type: Number,
        required: true,
    },
    location: [{
        type: String,
        required: true,
    }],
    profile_pic: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
})


// password hash
UserSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})


// user model holding the schema 
const User = Mongoose.model("user", UserSchema)


module.exports = User;