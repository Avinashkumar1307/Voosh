const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect('mongodb://localhost:27017/googleAuth',{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("database connected")).catch((err)=>console.log("errr",err))