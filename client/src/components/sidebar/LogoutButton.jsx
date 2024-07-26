import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import useLogout from "../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto pt-1">
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <HiOutlineLogout
          className="ml-2 w-6 h-6 cursor-pointer"
          onClick={logout}
        />
      )}
    </div>
  );
};

export default LogoutButton;
