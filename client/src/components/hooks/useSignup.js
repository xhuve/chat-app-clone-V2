import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";
import axiosClient from "../utils/axiosClient";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async (data) => {
    const success = handleInputErrors(data);
    if (!success) return;

    setLoading(true);
    const { fullname, username, password, confirmPassword, gender } = data;
    axiosClient
      .post(
        "/api/auth/signup/",
        { fullname, username, password, confirmPassword, gender },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("🚀 ~ signup ~ body:", res);
        localStorage.setItem("chat-user", JSON.stringify(res.data));
        setAuthUser(res.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return [loading, signup];
};

export default useSignup;

const handleInputErrors = (data) => {
  if (
    !data.fullname ||
    !data.username ||
    !data.password ||
    !data.confirmPassword ||
    !data.gender
  ) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (data.password !== data.confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (data.password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};
