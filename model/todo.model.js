const { Schema, model } = require('mongoose')

const todo = new Schema({
    title: {type: String, unique: true},
    text: String,
    date_by: {type: Date , default: Date.now()}
})

module.exports = model('todo', todo)