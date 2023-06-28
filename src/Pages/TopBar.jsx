import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { BiFullscreen } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";






import admin from "../../Image/admin.jpg";
import ThemeSwitcher from "../Common/ThemeSwitcher";
import { useContext } from "react";
import { StateContext } from "../Context/StateContext";

// import english from "../../Image/English.svg";
// import ae from "../../Image/ae.svg";
// import china from "../../Image/china.svg";
// import french from "../../Image/french.svg";
// import germany from "../../Image/germany.svg";
// import italy from "../../Image/italy.svg";
// import russia from "../../Image/russia.svg";
// import spain from "../../Image/spain.svg";

const TopBar = () => {
  const {isSideOpen, setIsSideOpen,semi} = useContext(StateContext)

  return (
    <div className={`bg-white h-[70px] sticky top-0   w-full px-6 flex items-center justify-between z-[100] ${semi? 'mt-6': 'mt-0'}`}>
      <div className="flex items-center gap-4">
        <HiOutlineMenuAlt2 onClick={() => setIsSideOpen(!isSideOpen)} className="text-light-btn-color text-2xl cursor-pointer" />
        <div className="flex items-center justify-start bg-light-gray-bg px-3 py-2 rounded-md gap-3  font-para">
          <AiOutlineSearch className="text-light-btn-color text-xl font-semibold" />
          <input
            autoFocus
            type="search"
            className="focus:outline-none bg-inherit text-light-btn-color text-[12.5px] font-[500] tracking-[.05rem]"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="flex items-center justify-start">
        <span className="hover:bg-blue-btn-bg w-12 h-12 rounded-full grid place-items-center">

        <button className="w-5 h-5 overflow-hidden rounded-md ">
         
          <img src='https://themesbrand.com/velzon/html/default/assets/images/flags/us.svg' className="block z-50" alt="" />
        </button>
        </span>

        <button className="bg-gr hover:bg-blue-btn-bg px-3 py-3 rounded-full">
          <BiCategoryAlt className="text-[23px] font-normal hover:text-blue" />
        </button>
        <button className="bg-gr hover:bg-blue-btn-bg px-3 py-3 rounded-full">
          <BiShoppingBag className="text-[23px] font-normal hover:text-blue" />
        </button>
        <button className=" hover:bg-blue-btn-bg px-3 py-3 rounded-full">
          <BiFullscreen className="text-[23px] font-normal hover:text-blue" />
        </button>
       

        <ThemeSwitcher className="text-[23px] font-normal" />

        
        <button className=" hover:bg-blue-btn-bg px-3 py-3 rounded-full">
          <IoMdNotificationsOutline className="text-[23px] font-normal hover:text-blue" />
        </button>

        <div className="flex items-center gap-3 px-4 py-1 bg-light-gray-bg h-[70px]">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src={admin} alt="" />
          </div>
          <div className="font-para xl:block hidden">
            <span className="text-light-header-color text-[13px] font-semibold -tracking-tighter">
              Anna Adame
            </span>
            <p className="text-light-para-color text-[12px] font-medium -tracking-tighter">
              Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
