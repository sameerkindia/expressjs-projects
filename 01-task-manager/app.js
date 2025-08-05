const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require('dotenv').config()

app.use(express.json());
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.send("working");
});

app.use("/api/v1/tasks", tasks);

const port = 5000;

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
