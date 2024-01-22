import { Router } from "express";
import { getSubjects, getSubject, createSubject } from "../controllers/subject/index.js";
import authMiddleware from "../middleware/authMiddleWare.js";

export const subjectRouter = Router()

subjectRouter.use(authMiddleware)

subjectRouter.get("/all",  getSubjects)

subjectRouter.get("/", getSubject)

subjectRouter.post("/create", createSubject)
