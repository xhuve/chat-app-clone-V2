import SearchInput from "./SearchInput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";

function Sidebar() {
  return (
    <div className="flex flex-col pt-1 w-full md:w-auto">
      <SearchInput />
      <div className="divider px-2 mt-4 mb-0" />
      <Conversations />
      <LogoutButton />
    </div>
  );
}

export default Sidebar;
