const Mongoose = require("mongoose");


const FeedbackSchema = new Mongoose.Schema({
    _client: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    _mechanic: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    rating: {
        type: String,
        required: true,
    },
    review: {
        type: String,
    }
}, {
    timestamps: true
})


const Feedback = Mongoose.model("feedback", FeedbackSchema)


module.exports = Feedback;