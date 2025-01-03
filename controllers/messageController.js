const Conversation = require("../models/conversationSchema.js");
const Message = require("../models/messageModel.js");
const { getRecieverSocketId, io } = require("../socket/socket.js");

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const recieverId = req.params.id;
    const senderId = req.user.id;

    let convo = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (!convo) {
      convo = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }

    const newMessage = new Message({
      senderId,
      recieverId,
      message,
    });

    if (newMessage) convo.messages.push(newMessage._id);

    await Promise.all([convo.save(), newMessage.save()]);

    const recieverSocketId = getRecieverSocketId(recieverId);
    if (recieverSocketId) {
      io.to(recieverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).send(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller:", error.message);
    res.status(500).send({ error: "Internal server error" + error });
  }
};

const getMessages = async (req, res) => {
  try {
    const userToChat = req.params.id;
    const senderId = req.user._id;

    let convo = await Conversation.findOne({
      participants: { $all: [senderId, userToChat] },
    }).populate("messages");

    if (!convo) return res.status(200).send([]);

    return res.status(200).send(convo.messages);
  } catch (error) {
    console.log("Error in getMessage controller:", error.message);
    res.status(500).send({ error: "Internal server error" + error });
  }
};

module.exports = { sendMessage, getMessages };
