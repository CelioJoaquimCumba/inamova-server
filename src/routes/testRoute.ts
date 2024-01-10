import { Router } from "express";
import authMiddleware from "../middleware/authMiddleWare.js";

export const testRouter = Router()

testRouter.get("/", (req, res) => {
    res.status(200).json({ message: "Test route" })
})