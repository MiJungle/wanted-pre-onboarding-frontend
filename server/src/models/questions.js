const mongoose = require("mongoose");
const { Schema } = mongoose;

const Answer = new Schema({
    answer : String,
    type : [], 
})

const Question = new Schema([
    {
    Q: String,
    A: [Answer]
    }
])

module.exports = mongoose.model("Questions", Question);
