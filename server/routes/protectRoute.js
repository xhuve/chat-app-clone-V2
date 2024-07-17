import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if (!token)
            return res.status(401).json({ error:"Unauthorized - Invalid token" })

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (!decoded)
            return res.status(401).json({ error:"Unauthorized - Invalid token" })
        
        const user = await User.findById(decoded.userId).select("-password")
    
        if (!user)
            return res.status(401).json({ error:"Invalid user"})

        req.user = user

        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Authorization error" + error })
    }
}