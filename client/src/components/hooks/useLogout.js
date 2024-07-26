import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    const currentUrl = new URL(window.location)
    axios
      .post(currentUrl.origin + "/api/auth/logout")
      .then((res) => {
        localStorage.removeItem("chat-user");
        setAuthUser(null);
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, logout };
};

export default useLogout;
