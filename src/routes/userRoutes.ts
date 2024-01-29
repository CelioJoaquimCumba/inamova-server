import { Router } from "express"
import { changePassword, forgotPassword, login, register, validateToken, getStats } from "../controllers/user/index.js"
import authMiddleware from "../middleware/authMiddleWare.js"

export const userRouter = Router()

userRouter.post("/register", register)

userRouter.post("/login", login)

userRouter.post("/forgot-password", forgotPassword)

userRouter.post("/change-password", changePassword)

userRouter.post("/validate-token", validateToken)

userRouter.get("/stats",authMiddleware, getStats)