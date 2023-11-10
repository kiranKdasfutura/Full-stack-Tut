const mongoose=require('mongoose')

const Userschema=new mongoose.Schema({
    Name:{type:String,require:true},
    Email:{type:String,require:true},
    Password:{type:String,require:true},
    Images:{type:String},
    Otp:{type:String},
    OtpExpiration:{type:String},

} ,{timestamps:true});

module.exports =mongoose.model('user',Userschema)