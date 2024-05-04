const mongoose = require("mongoose");
const Schema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    otp : {
        type : String
    },
    rolu : {
        type : String,
        enum : ["Amin", "User", "marche"],
        default : "User"
    },
    verify: {
        type : Boolean,
        default : false
    },
})
module.exports = mongoose.model(`User`,Schema)