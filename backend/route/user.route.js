import express from "express";

const userRouter = express.Router();

userRouter.get("/user/login", (req, res) => {
  res.status(200).json({
    message: "succesfully, router is /user/login",
  });
});

export default userRouter;
