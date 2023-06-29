import "flowbite/dist/flowbite.min.js";
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
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { StateContext } from "../Context/StateContext";
import { useNavigate } from "react-router-dom";
const SideBarTwo = () => {
  const { isSideOpen,setIsSideOpen, tCol,sideLight,sideDark,sideGradient } = useContext(StateContext);
  const [dash, setDash] = useState(true);
  const [app, setApp] = useState(false);
  const [layout, setLayout] = useState(false);
  const [auth, setAuth] = useState(false);
  const [page, setPage] = useState(false);
  const [landing, setLanding] = useState(false);

  const sideVariant = {
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "4.5rem",
      transition: {
        damping: 40,
      },
    },
  };

  const nav = useNavigate()
  return (
    <motion.div
      className={`  z-[9999]   max-h-screen overflow-y-auto sideBar ${
        isSideOpen ? "!w-[18rem] " : "!w-[4rem] "
      } flex justify-start items-stretch ${sideLight? 'bg-white': ''} ${sideDark? 'bg-light-side-bar-color': ''} ${sideGradient? ' bg-sideGradient': ''}`}
    >
      <div className={`w-[4rem]  h-full   ${sideLight? 'bg-white': ''} ${sideDark? 'bg-[#3a4b84]': ''} ${sideGradient? ' bg-sideGradient': ''}`}>
        <div className=" grid place-items-center py-6 mb-4">
          <img
            src="https://themesbrand.com/velzon/html/default/assets/images/logo-sm.png"
            className="w-6 h-6"
            alt=""
          />
        </div>
        <div className="grid  place-items-center gap-4">
          <div
            onClick={() => (
              setDash(true),
              setApp(false),
              setLayout(false),
              setAuth(false),
              setPage(false),
              setLanding(false)
              ,setIsSideOpen(true)
              
            )}
            className={`${dash ? "bg-gray-btn-bg rounded-md" : ""} cursor-pointer p-2`}
          >
            <RiDashboard2Line className="text-[#abb9e8] text-2xl" />
          </div>
          <div
            onClick={() => (
              setDash(false),
              setApp(true),
              setLayout(false),
              setAuth(false),
              setPage(false),
              setLanding(false)
              ,setIsSideOpen(true)
            )}
            className={`${app ? "bg-gray-btn-bg rounded-md" : ""} cursor-pointer p-2`}
          >
            <RiApps2Line className="text-[#abb9e8] text-2xl" />
          </div>
          <div
            onClick={() => (
              setDash(false),
              setApp(false),
              setLayout(true),
              setAuth(false),
              setPage(false),
              setLanding(false)
              ,setIsSideOpen(true)
            )}
            className={`${layout ? "bg-gray-btn-bg rounded-md" : ""} cursor-pointer p-2`}
          >
            <RiLayout3Line className="text-[#abb9e8] text-2xl " />
          </div>
          <div
            onClick={() => (
              setDash(false),
              setApp(false),
              setLayout(false),
              setAuth(true),
              setPage(false),
              setLanding(false)
              ,setIsSideOpen(true)
            )}
            className={`${auth ? "bg-gray-btn-bg rounded-md" : ""} cursor-pointer p-2`}
          >
            <RiAuctionFill className="text-[#abb9e8] text-2xl " />
          </div>
          <div
            onClick={() => (
              setDash(false),
              setApp(false),
              setLayout(false),
              setAuth(false),
              setPage(true),
              setLanding(false)
              ,setIsSideOpen(true)
            )}
            className={`${page ? "bg-gray-btn-bg rounded-md" : ""} cursor-pointer p-2`}
          >
            <RiPagesLine className="text-[#abb9e8] text-2xl " />
          </div>
          <div
            onClick={() => (
              setDash(false),
              setApp(false),
              setLayout(false),
              setAuth(false),
              setPage(false),
              setLanding(true)
            )}
            className={`${landing ? "bg-gray-btn-bg rounded-md" : ""} cursor-pointer p-2`}
          >
            <RiLandscapeFill className="text-[#abb9e8] text-2xl " />
          </div>
        </div>
      </div>

      <div
        className={` max-h-screen overflow-y-auto flex-1 ${
          isSideOpen ? "block" : "hidden"
        }`}
      >
        <div className=" grid place-items-center py-6 mb-4">
          <img
            src="https://themesbrand.com/velzon/html/default/assets/images/logo-light.png"
            className="w-24 h-auto"
            alt=""
          />
        </div>
        <div className="">
            <ul id="dropdown-example" className={`w-full   py-2 space-y-2 ${dash?'block': 'hidden'}`}>
            <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                <span className=" text-inherit ps-4">-</span>
                <a
                href="#"
                className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                >
                Analytics
                </a>
            </li>
            <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                <span className=" text-inherit ps-4">-</span>
                <a
                href="#"
                className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                >
                CRM
                </a>
            </li>
            <li
            onClick={() => nav('/')}
            className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                <span className=" text-inherit ps-4">-</span>
                <apan
                
                className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                >
                Ecommerce
                </apan>
            </li>
            <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                <span className=" text-inherit ps-4">-</span>
                <a
                href="#"
                className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                >
                Crypto
                </a>
            </li>
            <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                <span className=" text-inherit ps-4">-</span>
                <a
                href="#"
                className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                >
                Projects
                </a>
            </li>
            <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                <span className=" text-inherit ps-4">-</span>
                <a
                href="#"
                className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                >
                NFT
                </a>
            </li>
            <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                <span className=" text-inherit ps-4">-</span>
                <a
                href="#"
                className="flex items-center text-sm   transition duration-75 rounded-lg pl-6 group  text-inherit"
                >
                Job
                </a>
            </li>
            </ul>
            <ul id="dropdown-example1" className={`w-full   py-2 space-y-2 ${app?'block': 'hidden'}`}>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Calendar
                  </a>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Chat
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example2"
                    data-collapse-toggle="dropdown-example2"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Email
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example2"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Mailbox
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Email Templates
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example3"
                    data-collapse-toggle="dropdown-example3"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Ecommerce
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example3"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Products
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Product Details
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Create Product
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Orders
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Order Details
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Customers
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Shopping Carts
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Checkout
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Seller
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Seller Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example4"
                    data-collapse-toggle="dropdown-example4"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Projects
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example4"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        List
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Overview
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Create Project
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example5"
                    data-collapse-toggle="dropdown-example5"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Tasks
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example5"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Kanban Board
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        List View
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Task Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example6"
                    data-collapse-toggle="dropdown-example6"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      CRM
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example6"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Contacts
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Companies
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Deals
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Leads
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example7"
                    data-collapse-toggle="dropdown-example7"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Crypto
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example7"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Transaction
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Buy & Sell
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Orders
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        My Wallet
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        ICO Lists
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        KYC Application
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example8"
                    data-collapse-toggle="dropdown-example8"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Invoices
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example8"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        List View
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Details
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Create Invoice
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example9"
                    data-collapse-toggle="dropdown-example9"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Support Tickets
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example9"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        List View
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Ticket Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example10"
                    data-collapse-toggle="dropdown-example10"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      NFT Marketplace
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example10"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Marketplace
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Explore now
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Live Auction
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Item Details
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Collections
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Creators
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Ranking
                      </a>
                    </li>

                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Wallet Connect
                      </a>
                    </li>

                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Create NFT
                      </a>
                    </li>
                  </ul>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    File Manager
                  </a>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    To do
                  </a>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex items-center ">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                  >
                    Jobs
                    <span className="  px-2 py-1   text-xs font-medium rounded-lg  text-white  bg-emerald-950  dark:bg-gray-700 dark:text-gray-300">
                      New
                    </span>
                  </a>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex items-center ">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                  >
                    API Keys
                    <span className=" px-2 py-1  ml-22 text-xs font-medium rounded-lg  text-white  bg-emerald-950  dark:bg-gray-700 dark:text-gray-300">
                      New
                    </span>
                  </a>
                </li>
              </ul>

              <ul id="dropdown-example" className={`w-full   py-2 space-y-2 ${layout?'block': 'hidden'}`}>
            <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                <span className=" text-inherit ps-4">-</span>
                <a
                href="#"
                className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                >
                Horizontal
                </a>
            </li>
            <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                <span className=" text-inherit ps-4">-</span>
                <a
                href="#"
                className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                >
                Detached
                </a>
            </li>
            <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                <span className=" text-inherit ps-4">-</span>
                <a
                href="#"
                className=" text-sm   transition duration-75 rounded-lg pl-6 group  text-inherit"
                >
                Two Column
                </a>
            </li>
            <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                <span className=" text-inherit ps-4">-</span>
                <a
                href="#"
                className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                >
                Hovered
                </a>
            </li>
            </ul>

            <ul id="dropdown-example11" className={`w-full   py-2 space-y-2 ${auth?'block': 'hidden'}`}>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example20"
                    data-collapse-toggle="dropdown-example20"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Sign In
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example20"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Basic
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Cover
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example21"
                    data-collapse-toggle="dropdown-example21"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Sign Up
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example21"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Basic
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Cover
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                  onClick={() => nav('/password-reset')}
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example22"
                    data-collapse-toggle="dropdown-example22"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Password Reset
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example22"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Basic
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Cover
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example23"
                    data-collapse-toggle="dropdown-example23"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Password Create
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example23"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Basic
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Cover
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example24"
                    data-collapse-toggle="dropdown-example24"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Lock Screen
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example24"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Basic
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Cover
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example25"
                    data-collapse-toggle="dropdown-example25"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Logout
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example25"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Basic
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Cover
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example26"
                    data-collapse-toggle="dropdown-example26"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Success Message
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example26"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Basic
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Cover
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example27"
                    data-collapse-toggle="dropdown-example27"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Two Steps Verification
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example27"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Basic
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Cover
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example28"
                    data-collapse-toggle="dropdown-example28"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Error
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example28"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        404 Basic
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        404 Cover
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        404 Alt
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        500
                      </a>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Offline Page
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul id="dropdown-example12" className={`w-full   py-2 space-y-2 ${page?'block': 'hidden'}`}>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Starter
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example30"
                    data-collapse-toggle="dropdown-example30"
                  >
                    <span className=" text-inherit ps-2">-</span>
                    <span
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                      sidebar-toggle-item="true"
                    >
                      Profile
                    </span>
                    <svg
                      sidebar-toggle-item="true"
                      className="  w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul
                    id="dropdown-example30"
                    className="  list-disc   py-2 space-y-2"
                  >
                    <li onClick={() => nav('/profile/settings')} className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <span
                       
                        className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Simple Page
                      </span>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <span className=" text-xs  text-inherit ps-12">o</span>
                      <a
                        href="#"
                        className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Team
                  </a>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Timeline
                  </a>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    FAQs
                  </a>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Pricing
                  </a>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Gallery
                  </a>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-1/3 items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Maintainance
                  </a>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Coming Soon
                  </a>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Sitemap
                  </a>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Search Result
                  </a>
                </li>
              </ul>
              <ul id="dropdown-example40" className={`w-full   py-2 space-y-2 ${landing?'block': 'hidden'}`}>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    One Page
                  </a>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    NFT Landing
                  </a>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 w-full flex  items-center ">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                    href="#"
                    className=" text-sm flex-1 flex justify-between items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                  >
                    Jobs
                    <span className="  px-2 py-1   text-xs font-medium rounded-lg  text-white  bg-emerald-950  dark:bg-gray-700 dark:text-gray-300">
                      New
                    </span>
                  </a>
                </li>
              </ul>
        </div>
        
      </div>
    </motion.div>
  );
};

export default SideBarTwo;
