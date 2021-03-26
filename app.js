const express = require("express")
const mongoose = require("mongoose")
const app = express()
const QAFORUM = require("./models/question")

mongoose.connect('mongodb://localhost/QAFORUMDB');

app.use(express.json())

app.get("/feed", (request, response) => {
    QAFORUM.find({}).then(
        doc => response.json(doc)
    ).catch(
        err => response.json(err)
    )
})

app.get("/question/:id", (request, response) => {
    var id = request.params.id
    QAFORUM.findById(id).then(
        doc => response.json(doc)
    ).catch(
        err => response.json(err)
    )
})

app.post("/askquestion", (request, response) => {
    var Question = request.body
    QAFORUM.create(Question).then(
        question => response.json(question)
    ).catch(
        err => response.json(err)
    )
})

app.listen(5000, () => console.log("Server is running"))