const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    emailId:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    mobileNum:{
        type: Number,
        required: true
    },
    age: Number
});

module.exports = mongoose.model('User',userSchema);
