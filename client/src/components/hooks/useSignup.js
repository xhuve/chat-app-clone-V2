import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async (data) => {
    const success = handleInputErrors(data);
    if (!success) return;

    setLoading(true);
    const currentUrl = new URL(window.location)
    const { fullname, username, password, confirmPassword, gender } = data;
    axios
      .post(
        currentUrl.origin + "api/auth/signup/",
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
