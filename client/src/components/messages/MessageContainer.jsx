import React, { useEffect } from "react";
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import useConversation from "../../zustand/useConversation.js";
import { useAuthContext } from "../../context/AuthContext.jsx";

const MessageContainer = () => {
  const { selectedConvo, setSelectedConvo } = useConversation();

  useEffect(() => {
    return () => setSelectedConvo(null);
  }, [setSelectedConvo]);

  return (
    <div className="w-full flex flex-col">
      {selectedConvo ? (
        <>
          <div className="bg-blue-400 px-4 mx-2 py-3 mb-2 rounded-lg">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConvo.fullname}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      ) : (
        <NoChatSelected />
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <div className="text-xl font-bold text-white">
        Welcome {authUser.fullname}
      </div>
      <div className="text-2xl font-bold text-white">
        Select someone to talk to
      </div>
    </div>
  );
};

export default MessageContainer;
