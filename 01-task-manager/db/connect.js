// const mongoose = require('mongoose')

// const connectionString = `mongodb+srv://sameerkhanaa5:SQI3oGLryufEkwlf@cluster0.ed0phdo.mongodb.net/task-manager?retryWrites=true&w=majority`

// // appName=Cluster0


// mongoose.connect(connectionString).then(()=> console.log('Database connect')).catch((err)=> console.log(err.message))


// const mongoose = require('mongoose');

// const connectionString = 'mongodb+srv://sameerkindia:7727989501@express.szfzcbh.mongodb.net/task-manager?retryWrites=true&w=majority&appName=express';

// mongoose.connect(connectionString, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   writeConcern: { w: 'majority' }
// })
// .then(() => console.log('✅ Database connected'))
// .catch((err) => console.error(console.log('❌ Connection error:', err.message)));



const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://sameerkindia:7727989501@express.szfzcbh.mongodb.net/task-manager?retryWrites=true&w=majority';

mongoose.connect(connectionString)
.then(() => console.log('✅ Database connected'))
.catch((err) => console.error('❌ Connection error:', err.message));

