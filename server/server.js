import express from "express"
import dotenv from 'dotenv'
import authRoutes from "./routes/authRoutes.js"

dotenv.config()
const app = express()

app.get('/', (req, res) => {
    res.send("Hello!")
})

app.use("/api/auth", authRoutes)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))