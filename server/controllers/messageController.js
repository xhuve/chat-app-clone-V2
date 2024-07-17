import Conversation from "../models/conversationSchema.js"
import Message from "../models/messageModel.js"

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body
        console.log("🚀 ~ sendMessage ~ message:", message)
        const recieverId = req.params.id
        const senderId = req.user.id

        let convo = await Conversation.findOne({
            participants: { $all: [senderId, recieverId] }
        })

        if (!convo) {
            convo = await Conversation.create({
                participants: [senderId, recieverId]
            })
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message
        })

        
        if (newMessage)
            convo.messages.push(newMessage._id)
        
        await Promise.all[convo.save(), newMessage.save()]

        res.status(201).json(newMessage)
    } catch (error) {
        console.log("Error in sendMessage controller:", error.message)
        res.status(500).json({ error: "Internal server error" + error })
    }
}

export const getMessages = async (req, res) => {
    try {
        const userToChat = req.params.id
        const senderId = req.user._id

        let convo = await Conversation.findOne({
            participants: { $all: [senderId, userToChat] }
        }).populate("messages")

        if (!convo)
            res.status(200).json([])

        res.status(200).json(convo.messages)        
    } catch (error) {
        console.log("Error in sendMessage controller:", error.message)
        res.status(500).json({ error: "Internal server error" + error })
    }
}