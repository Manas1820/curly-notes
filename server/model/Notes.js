const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    heading: {
        type: String,
    },
    description: {
        type: String,
    },
    like: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Notes', noteSchema);