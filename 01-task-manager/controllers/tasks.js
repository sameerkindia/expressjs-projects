const Task = require('../models/Task')

const getAllTasks = (req,res)=>{
    res.send('All task')
}

const createTask = async (req,res)=>{
    try {
        // console.log(req.body)
        const task = await Task.create(req.body)
        // res.json(req.body)
        res.status(201).json(task)

    } catch (error) {
        console.log(error)
    }
}
const getTask = (req,res)=>{
    // res.send("get Task")
    res.json({"id" : req.params.id})
}
const updateTask = (req,res)=>{
    res.send("update Task")
}

const deleteTask = (req,res)=>{
    res.send("delete Task")
}


module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}