import User from "../models/userModel.js"

export const getSidebarUsers = async (req, res) => {
    try {

        const loggedUserId = req.user._id
  
        const allUsers = await User.find({ _id: { $ne : loggedUserId }}).select("-password")

        res.status(500).json(allUsers)
        
    } catch (error) {
        console.log("🚀 getSidebarUsers Error:", error.message)
        res.send(400).json({error: "Internal server error"})
    }
}
