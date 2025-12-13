import express from "express";
import { getAllUsers, login, refreshToken, register, logout } from "../controllers/user.controller.js";

const userRouter = express.Router();


userRouter.get("/users", getAllUsers);
userRouter.post("/users/login", login);
userRouter.post("/users/register", register);
userRouter.post("/users/logout", logout);
userRouter.post("/refresh", refreshToken );

export default userRouter;
