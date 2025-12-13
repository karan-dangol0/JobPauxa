import mongoose from "mongoose";

const connectDb = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected");
  } catch (error) {
    console.log("Error in mongoose", error.message);
     

    process.exit(1);
  }
};

export default connectDb;


