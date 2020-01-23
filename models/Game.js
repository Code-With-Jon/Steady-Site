const mongoose = require('mongoose');

// const questionSchema = new mongoose.Schema({
//     question: String,
//     answer: String,
// })

const gameSchema = new mongoose.Schema({
    question: [String],
    answer: [String],
}, {
    timestamps: true
});

module.exports = mongoose.model('gameSchema', gameSchema);