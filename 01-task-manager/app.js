const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

app.use(express.json())
app.use(express.static('./public'))


app.get('/',(req,res)=>{
    res.send("working")
})

app.use('/api/v1/tasks', tasks)


const port = 5000

app.listen(port, ()=>{
    console.log(`app running on server ${port}`)
})