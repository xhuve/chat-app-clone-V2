const mongoose = require("mongoose");

const connectToMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("Error connecting to MongoDb", error);
  }
};

module.exports = connectToMongoDb;
