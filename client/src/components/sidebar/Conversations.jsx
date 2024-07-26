import React from "react";
import Conversation from "./Conversation.jsx";
import useGetConversations from "../hooks/useGetConversations.js";

function Conversations() {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((convo, idx) => (
        <Conversation
          key={idx}
          convo={convo}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
}

export default Conversations;
