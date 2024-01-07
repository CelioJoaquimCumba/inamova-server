
import express from "express"
import bodyParser from "body-parser"
import { userRouter } from './routes/userRoutes.js'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use("/user", userRouter)

app.listen(3000, () => {
  console.log("Server started on port 3000")
})

