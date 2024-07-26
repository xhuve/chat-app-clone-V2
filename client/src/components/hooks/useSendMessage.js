import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation.js";
import axiosClient from "../utils/axiosClient.js";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConvo } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    axiosClient
      .post(
        `/api/message/send/${selectedConvo?._id}`,
        { message },
        { withCredentials: true }
      )
      .then((res) => {
        setMessages([...messages, res.data]);
      })
      .catch((err) => {
        toast.error(err.response.data.error);
        return err;
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, sendMessage };
};

export default useSendMessage;
