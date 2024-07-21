import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConvo } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      axios
        .get(`http://localhost:3001/api/message/${selectedConvo?._id}`, {
          withCredentials: true,
        })
        .then((res) => {
          setMessages(res.data);
        })
        .catch((err) => {
          toast.error(err.response.data.error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    if (selectedConvo?._id) getMessages();
  }, [selectedConvo?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
