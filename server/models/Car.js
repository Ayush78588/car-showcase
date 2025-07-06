const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    imgsrc: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Car', carSchema);