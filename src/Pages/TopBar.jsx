import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { BiShoppingBag } from "react-icons/bi";
import { BiFullscreen } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

import admin from "../../Image/admin.jpg";
import ThemeSwitcher from "../Common/ThemeSwitcher";

import english from "../../Image/English.svg";
import ae from "../../Image/ae.svg";
import china from "../../Image/china.svg";
import french from "../../Image/french.svg";
import germany from "../../Image/germany.svg";
import italy from "../../Image/italy.svg";
import russia from "../../Image/russia.svg";
import spain from "../../Image/spain.svg";

const TopBar = () => {
  return (
    <div className=" bg-white h-[70px] sticky top-0  w-full px-6 flex items-center justify-between z-[100]">
      <div className="flex items-center gap-4">
        <HiOutlineMenuAlt2 className="text-light-btn-color text-2xl" />
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

      <div className="flex items-center justify-start gap-6">
        <button className="w-5 h-5 rounded-[.25rem] overflow-hidden">
          <img src={english} className="block" alt="" />
        </button>
        <button>
          <BiCategoryAlt className="text-[23px] font-normal" />
        </button>
        <button>
          <BiShoppingBag className="text-[23px] font-normal" />
        </button>
        <button>
          <BiFullscreen className="text-[23px] font-normal" />
        </button>

        <ThemeSwitcher className="text-[23px] font-normal" />
        <button>
          <IoMdNotificationsOutline className="text-[23px] font-normal" />
        </button>

        <div className="flex items-center gap-3 px-4 py-1 bg-light-gray-bg h-[70px]">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src={admin} alt="" />
          </div>
          <div className="font-para">
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
