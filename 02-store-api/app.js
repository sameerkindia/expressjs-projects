const express = require("express");
const app = express();
const router = require("./routes/product");
const connectToDB = require("./db/connect");

const errorMiddleware = require("./middlewares/error-handler");
const notFoundMiddleware = require("./middlewares/not-found");

require("dotenv").config();
require('express-async-errors')

// app.get('/', (req,res)=>{
//     res.send('setup is working')
// })

app.use(express.json());

app.use("/api/v1/products", router);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectToDB(process.env.MONGO_URL);
    console.log("DB connected");
    app.listen(5000, () => {
      console.log(`app is running on port ${port}`);
    });
  } catch (error) {}
};

start();
