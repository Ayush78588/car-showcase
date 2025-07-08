const mongoose = require('mongoose');
const { ref } = require('process');

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNum: {
        type: Number,
        required: true
    },
    car:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Car"
            }
        ]
    ,
    age: Number
});

module.exports = mongoose.model('User', userSchema);
