const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
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
    question_id: {
        type: String,
        required: true
    },
    comment_id: {
        type: Array,
    }
},{
    timestamps: true
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer ;