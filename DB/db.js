import { default as mongoose } from "mongoose";

const url = "mongodb://localhost:27017/harsh";
const connectToDatabase = async () => {
  try {
    if (mongoose.connections[0]?.readyState) {
      return mongoose.connections[0];
    } else {
      await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected successfully");
      return mongoose.connections[0];
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToDatabase;
