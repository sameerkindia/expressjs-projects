const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    // res.send('All task')
    const tasks = await Task.find({});

    // console.log(tasks)

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    // console.log(req.body)
    const task = await Task.create(req.body);
    // res.json(req.body)
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getTask = async (req, res) => {
  // res.send("get Task")
  // res.json({"id" : req.params.id})
  try {
    const { id: taskID } = req.params;

    const task = await Task.findOne({ _id: taskID });
    // console.log(task)

    if(!task){
        return res.status(404).json({msg: `No task with id: ${taskID}`})
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const updateTask = async (req, res) => {
  // res.send("update Task");
  try {
    const {id: taskID} = req.params
    const data = req.body

    // const updatedTask = await Task.findByIdAndUpdate(taskID , data )
    const task = await Task.findOneAndUpdate({_id: taskID} , data, {
      new : true,
      runValidators: true
    } )

    if(!task){
      return res.status(404).json({msg: `No task with id: ${taskID}`})
    }

    res.status(200).json({task})

  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteTask = async (req, res) => {
  // res.send("delete Task");
  try {
    const {id:taskID} = req.params

    const task = await Task.findOneAndDelete({_id : taskID})

    if(!task){
     return res.status(404).jsin({msg: `No task with id: ${taskID}`})
    }

    res.status(200).json(task)

  } catch (error) {
    
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
