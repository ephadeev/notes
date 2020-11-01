const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notesSchema = new Schema(
    {
        username: {type: String, required: true, unique: false},
        text: {type: String, required: true}
    },
    {
        timestamps: true
    }
);

const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;