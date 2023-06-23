import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";

const TopBar = () => {
  return (
    <div className="bg-white h-[70px] fixed top-0 w-full px-6 flex items-center justify-start">
      <div className="flex items-center gap-4">
        <HiOutlineMenuAlt2 className="text-light-btn-color text-2xl" />
        <div className="flex items-center justify-start bg-light-gray-bg px-3 py-2 rounded-md gap-3  font-para">
          <AiOutlineSearch className="text-light-btn-color text-xl font-semibold" />
          <input type="search" className="focus:outline-none bg-inherit text-light-btn-color text-[12.5px] font-medium" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
