import express from "express"
import dotenv from 'dotenv'
import authRoutes from "./routes/authRoutes.js"
import connectToMongoDb from "./database/connectToMongoDB.js"

dotenv.config()
const app = express()

app.get('/', (req, res) => {
    res.send("Hello!")
})

app.use("/api/auth", authRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    connectToMongoDb()
    console.log(`Server is running on port ${PORT}`)
})