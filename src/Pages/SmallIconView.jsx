import { useState } from "react";
import {
    RiDashboard2Line,
    RiApps2Line,
    RiLayout3Line,
    RiAccountCircleLine,
    RiPagesLine,
    RiRocketLine,
    RiAuctionFill,
    RiLandscapeFill,
  } from "react-icons/ri";

const SmallIconView = () => {
    const [dash, setDash] = useState(true);
  const [app, setApp] = useState(false);
  const [layout, setLayout] = useState(false);
  const [auth, setAuth] = useState(false);
  const [page, setPage] = useState(false);
  const [landing, setLanding] = useState(false);
  console.log(dash)
  return (
    <div>
       <div className="px-4  min-h-full bg-[#3a4b84] overflow-y-auto">
        <div className=" grid place-items-center py-6 mb-4">
          <img
            src="https://themesbrand.com/velzon/html/default/assets/images/logo-sm.png"
            className="w-6 h-6"
            alt=""
          />
        </div>
        <div className=" ">
          <div
           onMouseEnter={() => setDash(true)}
           onMouseLeave={() => setDash(true)}
        
            className={` rounded-md cursor-pointer p-2 relative flex items-center  justify-start`}
          >
            <RiDashboard2Line className="text-[#abb9e8] text-2xl" />
            {dash&& (<ul id="dropdown-example" className=" z-[99999]   py-2 space-y-2 absolute bg-white left-[3rem]">
                <li className=" text-gray  pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Analytics
                  </a>
                </li>
                <li className=" text-gray  pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    CRM
                  </a>
                </li>
                <li className=" text-gray  pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Ecommerce
                  </a>
                </li>
                <li className=" text-gray  pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Crypto
                  </a>
                </li>
                <li className=" text-gray  pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Projects
                  </a>
                </li>
                <li className=" text-gray  pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    NFT
                  </a>
                </li>
                <li className=" text-gray  pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className="flex items-center text-sm   transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Job
                  </a>
                </li>
              </ul>)}
          </div>

          <div
           
            className={` rounded-md cursor-pointer p-2 relative`}
          >
            <RiApps2Line className="text-[#abb9e8] text-2xl" />
          </div>
          <div
           
            className={` rounded-md cursor-pointer p-2 relative`}
          >
            <RiLayout3Line className="text-[#abb9e8] text-2xl " />
          </div>
          <div
           
            className={` rounded-md cursor-pointer p-2 relative`}
          >
            <RiAuctionFill className="text-[#abb9e8] text-2xl " />
          </div>
          <div
           
            className={` rounded-md cursor-pointer p-2 relative`}
          >
            <RiPagesLine className="text-[#abb9e8] text-2xl " />
          </div>
          <div
           className={` rounded-md cursor-pointer p-2 relative`}
          >
            <RiLandscapeFill className="text-[#abb9e8] text-2xl " />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmallIconView
