const mongoose = require('mongoose');
const dotenv = require('dotenv');


// load new configuration
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error(' Error connecting to DB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
