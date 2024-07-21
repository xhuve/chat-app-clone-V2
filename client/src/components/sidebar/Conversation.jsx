import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function Conversation({ convo, lastIdx }) {
  const { selectedConvo, setSelectedConvo } = useConversation();

  const isSelected = selectedConvo?._id == convo._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(convo._id);

  return (
    <>
      <div
        onClick={() => setSelectedConvo(convo)}
        className={`flex gap-2 items-center ${
          isSelected ? "bg-cyan-400" : null
        } hover:bg-cyan-400 py-2 px-2 cursor-pointer`}
      >
        <div className={`avatar ${isOnline ? "online" : null}`}>
          <div className="w-12 rounded-full">
            <img src={convo.profilePic} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <p className="font-bold">{convo.fullname}</p>
        </div>
      </div>

      {!lastIdx ? <div className="divider my-0 py-0 h-1" /> : null}
    </>
  );
}

export default Conversation;
