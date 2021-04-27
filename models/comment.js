const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    ans_id: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Comment = mongoose.model('Commenrt',commentSchema);

module.exports = Comment;