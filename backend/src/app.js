const express = require("express")
const cookieparser = require("cookie-parser")

// require routes
const authRouter = require("./routes/auth.routes")
const postRouter = require("./routes/post.route")
const userRouter = require("./routes/user.routes")
const cors = require("cors")


const app = express();
app.use(express.json());
app.use(cookieparser())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

//using rotes
app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter)
app.use("/api/users", userRouter)

module.exports = app