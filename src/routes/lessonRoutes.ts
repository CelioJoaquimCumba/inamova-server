import { Router } from "express";
import { getLessons, getLesson, createLesson } from "../controllers/lesson/index.js";
import authMiddleware from "../middleware/authMiddleWare.js";

export const lessonRouter = Router()

lessonRouter.use(authMiddleware)

lessonRouter.get("/all",  getLessons)

lessonRouter.get("/", getLesson)

lessonRouter.post("/create", createLesson)
