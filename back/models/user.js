const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        default:Date.now(),
    }
});

module.exports = mongoose.model('User',userSchema)