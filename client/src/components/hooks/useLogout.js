import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
import axiosClient from "../utils/axiosClient";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    axiosClient
      .post("/api/auth/logout")
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
