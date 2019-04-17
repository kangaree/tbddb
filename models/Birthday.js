const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BirthdaySchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    wikilinks: {
        type: Number,
    },
    image: {
        type: String,
    },
    year: {
        type: Number,
    },
    month: {
        type: Number,
    },
    day: {
        type: Number,
    },
    birthdate: {
        type: Date,
    },
});

module.exports = Birthday = mongoose.model('Birthday', BirthdaySchema);