// const mongoose = require('mongoose');

// mongoose.connect(connectionString, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   writeConcern: { w: 'majority' }
// })
// .then(() => console.log('✅ Database connected'))
// .catch((err) => console.error(console.log('❌ Connection error:', err.message)));

const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url);
};

// .then(() => console.log('✅ Database connected'))
// .catch((err) => console.error('❌ Connection error:', err.message));

module.exports = connectDB;
