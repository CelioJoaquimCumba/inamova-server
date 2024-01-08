
import express from "express"
import bodyParser from "body-parser"
import { userRouter } from './routes/userRoutes.js'
import { testRouter } from "./routes/testRoute.js"
import errorHandler from "./middleware/errorHandler.js"

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use("/user", userRouter)
app.use("/test", testRouter)

app.use(errorHandler)

app.listen(3000, () => {
  console.log("Server started on port 3000")
})

