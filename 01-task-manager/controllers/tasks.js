const getAllTasks = (req,res)=>{
    res.send('All task')
}

const createTask = (req,res)=>{
    // console.log(req.body)
    res.json(req.body)
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