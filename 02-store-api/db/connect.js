const mongoose = require("mongoose");

// mongoose.connect()

const connectToDB = async (url) => {
  mongoose.connect(url);
};

module.exports = connectToDB;
