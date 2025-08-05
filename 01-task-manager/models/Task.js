const mongoose = require('mongoose')

// const TaskSchema = new mongoose.Schema({
//     name: String,
//     completed: Boolean
// })

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxLength: [20, 'name can not be more than 20 charactors']
    },
    completed: {
        type: Boolean,
        default : false
    }
})


module.exports = mongoose.model('Task', TaskSchema)