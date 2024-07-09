import express from "express"
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"

import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import connectToMongoDb from "./database/connectToMongoDB.js"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

app.get('/', (req, res) => {
    res.send("Hello!")
})



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    connectToMongoDb()
    console.log(`Server is running on port ${PORT}`)
})