import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState();
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
    if (!username || !password)
      toast.error("Please enter your username and password");

    setLoading(true);
    const currentUrl = new URL(window.location)
    axios
      .post(
        currentUrl.origin + "/api/auth/login",
        { username, password },
        { withCredentials: true }
      )
      .then((res) => {
        localStorage.setItem("chat-user", JSON.stringify(res.data));
        setAuthUser(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, login };
};

export default useLogin;
