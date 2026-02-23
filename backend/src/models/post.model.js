const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    imgUrl:{
        type:String,
        required:[  true,"Image URL is required"]
    },
    user:{
        ref: "User",
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User is required for creating a post"]
    }
})

const postModel = mongoose.model("Posts", postSchema)

module.exports = postModel