import mongoose from "mongoose";

const connectDb = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected");
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });

    process.exit(0);
  }
};

export default connectDb;


