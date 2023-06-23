import TopBar from "./TopBar";

import { PiPulse } from "react-icons/pi";
import { RiCalendar2Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Ecommerce = () => {
  return (
    <div className="z-50 bg-light-gray-bg flex-1 max-h-screen overflow-y-auto  min-h-screen">
      <TopBar />
      <div className="px-6 flex items-center justify-between">
        <div className="">
          <h4 className="text-red dark:text-blue">Good Morning, Anna!</h4>
          <p>Here's what's happening with your store today.</p>
        </div>
        <div className="flex items-center justify-start">
            <div className="">

            <input type="date" name=""  id="" />
            </div>
            <button className="flex items-center justify-start">
            <AiOutlinePlusCircle/>

                <span>Add Product</span>
            </button>
            <button className="">
                <PiPulse/>

            </button>
        </div>
      </div>

      
    </div>
  );
};

export default Ecommerce;
