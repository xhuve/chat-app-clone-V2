import mongoose from "mongoose";

const connectToMongoDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://owner:1DH2sd5zvPYfPHlN@cluster0.qc6jvpb.mongodb.net/chat-app-db?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to MongoDb");
  } catch (error) {
    console.log("Error connecting to MongoDb", error);
  }
};

export default connectToMongoDb;
