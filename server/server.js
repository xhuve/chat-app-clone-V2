import express from "express"
import dotenv from 'dotenv'
import CORS from 'cors'
import cookieParser from "cookie-parser"

import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from './routes/userRoutes.js'
import connectToMongoDb from "./database/connectToMongoDB.js"

dotenv.config()
const app = express()

app.use(CORS({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/user", userRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    connectToMongoDb()
    console.log(`Server is running on port ${PORT}`)
})