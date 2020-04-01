
const Todo = require('../model/todo.model')

exports.todos = async (req, res) =>{
    const todos = await Todo.find({})
    res.json(todos)
}   


exports.detail = async (req, res) => {
    const todoId = req.params.id
    const todo = await Todo.findOne({_id: todoId})
    res.json(todo)
}

exports.delete = async (req,res) => {
    await Todo.remove({_id : req.params.id})
    res.status(200)
}

exports.add = async (req, res) => {
    const {todo} = req.body
    const t = new Todo({title: todo})
    await t.save()
    res.status(200)

}