const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    answer_id: {
        type: Array,
    }
},{
    timestamps: true
});

const Question = mongoose.model('Question',questionSchema);

module.exports = Question;