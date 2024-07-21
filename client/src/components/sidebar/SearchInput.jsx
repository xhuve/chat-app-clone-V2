import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversations";
import toast from "react-hot-toast";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConvo } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3)
      return toast.error("Search term must be 3 chars long");

    console.log("🚀 ~ handleSubmit ~ search:", search);
    const conversation = conversations.find((c) =>
      c.fullname.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConvo(conversation);
      setSearch("");
    } else toast.error("No user found");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center gap-1">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
        />
        <button type="submit" className="btn btn-circle">
          <IoMdSearch className="w-5 h-5" />
        </button>
      </form>
    </>
  );
}

export default SearchInput;
