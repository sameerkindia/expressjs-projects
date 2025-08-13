require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const mainRouter = require('./routes/main')
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1' , mainRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();


// const express = require("express");
// const connectDB = require("./db/connect");
// require('express-async-errors')
// require("dotenv").config();

// const notFoundMiddleware = require('./middleware/not-found')

// const app = express();

// app.use(express.json());

// app.get("/api/v1/", (req, res) => {
//   res.send("hello ");
// });

// app.use(notFoundMiddleware)

// const port = process.env.PORT || 5000;

// const start = async () => {
//   await connectDB(process.env.MONGO_URL);

//   app.listen(port, () => {
//     console.log(`server is runing on port ${port}`)
//   });
// };


// start()