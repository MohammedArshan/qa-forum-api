const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    question_text : String,
    author : String
})

const QAFORUM = mongoose.model('QAFORUM', schema)

module.exports = QAFORUM