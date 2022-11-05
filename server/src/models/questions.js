const mongoose = require('mongoose');
const { Schema } = mongoose;

const Answer = new Schema({
    answerChoice1 : String,
    answerChoice2 : String, 
})

const Question = new Schema({
    question: String,
    answer: [Answer]
})

module.exports = mongoose.model('Questions', Question);