import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
import axiosClient from "../utils/axiosClient";


const useLogin = () => {
  const [loading, setLoading] = useState();
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }) => {
    if (!username || !password)
      toast.error("Please enter your username and password");

    setLoading(true);
    axiosClient
      .post(
        "/api/auth/login",
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
