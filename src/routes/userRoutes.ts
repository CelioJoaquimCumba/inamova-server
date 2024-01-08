import { Router } from "express"
import { register } from "../controllers/user/register.js"
import { login } from "../controllers/user/login.js"
import { forgotPassword } from "../controllers/user/forgot-password.js"
import { changePassword } from "../controllers/user/change-password.js"

export const userRouter = Router()

userRouter.post("/register", register)

userRouter.post("/login", login)

userRouter.post("/forgot-password", forgotPassword)

userRouter.post("/change-password", changePassword)