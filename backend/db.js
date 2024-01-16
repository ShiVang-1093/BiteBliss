const mongoose = require('mongoose');

require('dotenv').config();

const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (err) {
    console.error('Connection failed:', err);
    process.exit(1);
  }
};

module.exports = dbconnection;