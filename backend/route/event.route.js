import express from "express";
import { registerEvent } from "../controllers/Event.controller.js";

const eventRouter = express.Router();

eventRouter.post("/event/register", registerEvent);

export default eventRouter;