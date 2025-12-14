import express from "express";
import { adminLogin } from "../controllers/adminAuth.controller.js";
const adminRouter = express.Router();

adminRouter.post("/admin/login", adminLogin);

export default adminRouter;