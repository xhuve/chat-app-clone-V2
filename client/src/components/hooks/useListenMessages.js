import { useEffect } from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, messages]);
};

export default useListenMessages;
