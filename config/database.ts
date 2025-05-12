import mongoose from "mongoose";

let connected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (connected) return;
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    connected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};
