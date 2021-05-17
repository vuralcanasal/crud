const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    memory : {
        type : String,
        required: true
    },
    language : {
        type: String,
        required: true,
    },
    date : {
        type: String,
        required: true,
    },
    who : {
        type: String,
        required: true,
    }
})

const Memorydb = mongoose.model('memorydb', schema);

module.exports = Memorydb;