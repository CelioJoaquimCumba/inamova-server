import { Router } from "express"
import { createUser } from "../controllers/createUser.js"
import { loginUser } from "../controllers/loginUser.js"

export const userRouter = Router()

userRouter.post("/register", createUser)

userRouter.post("/login", loginUser)