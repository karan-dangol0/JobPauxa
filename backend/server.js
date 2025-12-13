import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./route/user.route.js";
import connectDb from "./lib/db.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/api/v1", userRouter);

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
  connectDb();
  console.log(`Server is started on port ${PORT || 3000}`);
});
