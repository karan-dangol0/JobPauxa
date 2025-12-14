import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./route/user.route.js";
import connectDb from "./lib/db.js";
import adminRouter from "./route/admin.route.js";
import organizationAuth from "./route/organizationAuth.route.js";
import eventRouter from "./route/event.route.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/api/v1", userRouter);
app.use("/api/v1", adminRouter);
app.use("/api/v1", organizationAuth);
app.use("/api/v1", eventRouter);

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
  connectDb();
  console.log(`Server is started on port ${PORT || 3000}`);
});
