const express = require("express");
const app = express();
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require('dotenv').config()

app.use(express.json());
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send("working");
});

app.use("/api/v1/tasks", tasks);

app.use(notFound)

app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("✅ Database connected");
    app.listen(port, () => {
      console.log(`app running on server ${port}`);
    });
  } catch (err) {
    console.error("❌ Connection error:", err.message);
  }
};

start();
