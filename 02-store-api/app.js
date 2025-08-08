const express = require('express')
const app = express()
const router = require('./routes/product')
const connectToDB = require('./db/connect')

require('dotenv').config()


// app.get('/', (req,res)=>{
//     res.send('setup is working')
// })

app.use('/api/v1/' , router)

port = process.env.PORT

const start = async ()=>{
    try {
     await connectToDB(process.env.MONGO_URL)
     console.log('DB connected')
     app.listen(5000, ()=>{
         console.log('app is running on port 500')
     })
        
    } catch (error) {
        
    }
}


start()