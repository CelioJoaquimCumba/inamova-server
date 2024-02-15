
import express from "express"
import bodyParser from "body-parser"
import { testRouter, userRouter, quizRouter,lessonRouter, subjectRouter, articleRouter } from "./routes/index.js"
import errorHandler from "./middleware/errorHandler.js"
import cors from "cors"

const app = express()

app.use(cors({origin: true, credentials: true}))

app.use(bodyParser.urlencoded({ extended: false }))

app.use("/user", userRouter)
app.use("/test", testRouter)
app.use("/lesson",lessonRouter)
app.use("/article",articleRouter)
app.use("/subject",subjectRouter)
app.use("/quiz", quizRouter)

app.use(errorHandler)

app.listen(3000, () => {
  console.log("Server started on port 3000")
})

