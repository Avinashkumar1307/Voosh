const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    googleId:{
        type:String
    },
    displayName:{
        type:String
    },
    email:{
        type:String
    },
    image:{
        type:String
    },
    password:{
        type:String,
        default: ""
    },
    bio:{
        type:String,
        default: ""
    },
    phone:{
        type:String,
        default: ""
    },
    accType:{
        type: String,
        enum: ["private", "public"],
        default: "private" 
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user" 
    }
},{timestamps:true});


const userdb = new mongoose.model("users",userSchema);

module.exports = userdb;