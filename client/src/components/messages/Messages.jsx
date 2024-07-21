import React, { useEffect } from "react";
import Message from "./Message.jsx";
import useGetMessages from "../hooks/useGetMessages.js";
import { useRef } from "react";
import useListenMessages from "../hooks/useListenMessages.js";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMessage = useRef();
  useListenMessages();

  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((msg) => (
          <div ref={lastMessage}>
            <Message key={msg._id} message={msg} />
          </div>
        ))}
      {loading && <p className="text-center">Loading messages...</p>}

      {!loading && messages.length === 0 && (
        <p className="text-center">Start a conversation</p>
      )}
    </div>
  );
};

export default Messages;
