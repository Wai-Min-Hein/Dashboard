import {
    RiDashboard2Line,
    RiApps2Line,
    RiLayout3Line,
    RiAccountCircleLine,
    RiPagesLine,
    RiRocketLine,
    RiAuctionFill,
    RiLandscapeFill,
    RiArrowRightSLine
  } from "react-icons/ri";
  import "../../node_modules/flowbite/dist/flowbite"
  
  import { useContext } from "react";
  import { StateContext } from "../Context/StateContext";
import { useNavigate } from "react-router-dom/dist";
  const SideBarHor = () => {
    const { isSideOpen, semi, hor } = useContext(StateContext);
    const nav = useNavigate()
    return (
      <div className="border-t border-gray-500 mt-4  ">
        <div className="  w-full  bg-white hidden lg:block">
          <div className="flex items-center justify-start gap-6 px-[5rem] z-[9999] py-2">
            <div className={`cursor-pointer p-2 relative dash`}>
              <button
                type="button"
                className="flex items-center w-full text-gray transition duration-75 rounded-lg group  dark:text-2xl dark:hover:text-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <RiDashboard2Line className=" text-gray-dark  text-xl" />
                <span
                  className={`  text-[#6d7080]  flex-1 ml-3 text-sm text-left whitespace-nowrap`}
                >
                  Dashboards
                </span>
                <svg
                  className={`  text-gray w-6 h-6`}
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
              <div className="absolute w-[10rem] px-4  bg-white  shadow-lg rounded-md top-[3rem] dash-child left-0">
                <ul id="dropdown-example" className={`w-full   py-2 space-y-2 `}>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Analytics
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      CRM
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="/"
                      className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Ecommerce
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Crypto
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Projects
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      NFT
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className="flex items-center text-sm   transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Job
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`cursor-pointer p-2 relative app`}>
              <button
                type="button"
                className="flex items-center w-full text-gray transition duration-75 rounded-lg group  dark:text-2xl dark:hover:text-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <RiApps2Line className=" text-gray-dark  text-xl" />
                <span
                  className={`  text-[#6d7080]  flex-1 ml-3 text-sm text-left whitespace-nowrap`}
                >
                  App
                </span>
                <svg
                  className={`  text-gray w-6 h-6`}
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
              <div className="absolute w-[12rem] bg-white  shadow-lg rounded-md top-[3rem] app-child left-0">
              <ul id="dropdown-example1" className={`w-full   py-2 space-y-2`}>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Calendar
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
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
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <RiArrowRightSLine/>
                    </button>
                    {/* <ul
                      id="dropdown-example2"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Mailbox
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Email Templates
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                      aria-controls="dropdown-example3"
                      data-collapse-toggle="dropdown-example3"
                    >
                      <span className=" text-inherit ps-2">-</span>
                      <span

                        className="flex-1  text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                        sidebar-toggle-item="true"
                      >
                        Ecommerce
                      </span>
                      <RiArrowRightSLine/>
                    </button>
                    {/* <ul
                      id="dropdown-example3"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Products
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Product Details
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Create Product
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Orders
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Order Details
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Customers
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Shopping Carts
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Checkout
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Seller
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Seller Details
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <RiArrowRightSLine/>
                    </button>
                    {/* <ul
                      id="dropdown-example4"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          List
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Overview
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Create Project
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <RiArrowRightSLine/>
                    </button>
                    {/* <ul
                      id="dropdown-example5"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Kanban Board
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          List View
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Task Details
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <RiArrowRightSLine/>
                    </button>
                    {/* <ul
                      id="dropdown-example6"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Contacts
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Companies
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Deals
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Leads
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <RiArrowRightSLine/>
                    </button>
                    {/* <ul
                      id="dropdown-example7"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Transaction
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Buy & Sell
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Orders
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          My Wallet
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          ICO Lists
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          KYC Application
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <RiArrowRightSLine/>
                    </button>
                    {/* <ul
                      id="dropdown-example8"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          List View
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Details
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Create Invoice
                        </a>
                      </li>
                    </ul>*/}
                  </li> 
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <RiArrowRightSLine/>
                    </button>
                    {/* <ul
                      id="dropdown-example9"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          List View
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Ticket Details
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <RiArrowRightSLine/>
                    </button>
                    {/* <ul
                      id="dropdown-example10"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Marketplace
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Explore now
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Live Auction
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Item Details
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Collections
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Creators
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Ranking
                        </a>
                      </li>
  
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Wallet Connect
                        </a>
                      </li>
  
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Create NFT
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className={`cursor-pointer p-2 lay relative`}>
              <button
                type="button"
                className="flex items-center w-full text-gray transition duration-75 rounded-lg group  dark:text-2xl dark:hover:text-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <RiLayout3Line className=" text-gray-dark  text-xl" />
                <span
                  className={`  text-[#6d7080]  flex-1 ml-3 text-sm text-left whitespace-nowrap`}
                >
                  Layout
                </span>
                <svg
                  className={`  text-gray w-6 h-6`}
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
              <div className="absolute w-[10rem] px-4 bg-white  shadow-lg rounded-md top-[3rem] lay-child left-0">
              <ul id="dropdown-example" className={`w-full   py-2 space-y-2 `}>
              <li className=" text-gray pb-2 flex  w-full items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                  href="#"
                  className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                  Horizontal
                  </a>
              </li>
              <li className=" text-gray pb-2 flex  w-full items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                  href="#"
                  className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                  Detached
                  </a>
              </li>
              <li className=" text-gray pb-2 flex  w-full items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                  href="#"
                  className=" text-sm   transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                  Two Column
                  </a>
              </li>
              <li className=" text-gray pb-2 flex  w-full items-center">
                  <span className=" text-inherit ps-4">-</span>
                  <a
                  href="#"
                  className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                  Hovered
                  </a>
              </li>
              </ul>
              </div>
            </div>
            <div className={`cursor-pointer p-2 auth relative `}>
              <button
                type="button"
                className="flex items-center w-full text-gray transition duration-75 rounded-lg group  dark:text-2xl dark:hover:text-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <RiAuctionFill className=" text-gray-dark  text-xl" />
                <span
                  className={`  text-[#6d7080]  flex-1 ml-3 text-sm text-left whitespace-nowrap`}
                >
                  Authentication
                </span>
                <svg
                  className={`  text-gray w-6 h-6`}
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
              <div className="absolute w-[14rem] px-4 bg-white  shadow-lg rounded-md top-[3rem] auth-child left-0">
              <ul id="dropdown-example11" className={`w-full   py-2 space-y-2 `}>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <RiArrowRightSLine/>
                    </button>
                    {/* <ul
                      id="dropdown-example20"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Cover
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      
                    </button>
                    {/* <ul
                      id="dropdown-example21"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Cover
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                      aria-controls="dropdown-example22"
                      data-collapse-toggle="dropdown-example22"
                    >
                      <span className=" text-inherit ps-2">-</span>
                      <span
                      onClick={() => nav('/password-reset')}
                        className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                        sidebar-toggle-item="true"
                      >
                        Password Reset
                      </span>
                      
                    </button>
                    {/* <ul
                      id="dropdown-example22"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Cover
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <RiArrowRightSLine/>
                    </button>
                    {/* <ul
                      id="dropdown-example23"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Cover
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <RiArrowRightSLine/>
                    </button>
                    {/* <ul
                      id="dropdown-example24"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Cover
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                    <RiArrowRightSLine/> 
                    </button>
                    {/* <ul
                      id="dropdown-example25"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Cover
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <RiArrowRightSLine/>
                    </button>
                    {/* <ul
                      id="dropdown-example26"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Cover
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <RiArrowRightSLine/>
                    </button>
                    {/* <ul
                      id="dropdown-example27"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Cover
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <button
                      type="button"
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <RiArrowRightSLine/>
                    </button>
                    {/* <ul
                      id="dropdown-example28"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          404 Basic
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          404 Cover
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          404 Alt
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          500
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Offline Page
                        </a>
                      </li>
                    </ul> */}
                  </li>
                </ul>
              </div>
  
            </div>
            <div className={`cursor-pointer p-2 page relative`}>
              <button
                type="button"
                className="flex items-center w-full text-gray transition duration-75 rounded-lg group  dark:text-2xl dark:hover:text-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <RiPagesLine className=" text-gray-dark  text-xl" />
                <span
                  className={`
                    text-[#6d7080]  flex-1 ml-3 text-sm text-left whitespace-nowrap`}
                >
                  Pages
                </span>
                <svg
                  className={`
                    text-gray w-6 h-6`}
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
              <div className="absolute w-[12rem] px-4 bg-white  shadow-lg rounded-md top-[3rem] page-child left-0">
              <ul id="dropdown-example12" className={`w-full   py-2 space-y-2 `}>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
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
                      className="  text-gray flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                      aria-controls="dropdown-example30"
                      data-collapse-toggle="dropdown-example30"
                    >
                      <span className=" text-inherit ps-2">-</span>
                      <span
                      onClick={()=> nav('/profile')}
                        className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                        sidebar-toggle-item="true"
                      >
                        Profile
                      </span>
                    </button>
                    {/* <ul
                      id="dropdown-example30"
                      className="  list-disc   py-2 space-y-2"
                    >
                      <li onClick={() => nav('/profile/settings')} className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Simple Page
                        </a>
                      </li>
                      <li className=" text-gray pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Settings
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Team
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Timeline
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      FAQs
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Gallery
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Maintainance
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-full items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Coming Soon
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-full items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Sitemap
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-full items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Search Result
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`cursor-pointer p-2 land relative`}>
              <button
                type="button"
                className="flex items-center w-full text-gray transition duration-75 rounded-lg group  dark:text-2xl dark:hover:text-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <RiLandscapeFill className=" text-gray-dark  text-xl" />
                <span
                  className={` text-[#6d7080]  flex-1 ml-3 text-sm text-left whitespace-nowrap`}
                >
                  Landing
                </span>
                <svg
                  className={` text-gray w-6 h-6`}
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
  
              <div className="absolute w-[10rem] px-4 bg-white  shadow-lg rounded-md top-[3rem] land-child left-0">
              <ul id="dropdown-example40" className={`w-full   py-2 space-y-2`}>
                  <li className=" text-gray pb-2 flex  w-full items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      One Page
                    </a>
                  </li>
                  <li className=" text-gray pb-2 flex  w-full items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      NFT Landing
                    </a>
                  </li>
                  <li className=" text-gray pb-2 w-full flex  items-center ">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex-1 flex justify-between items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                    >
                      Jobs
                      
                    </a>
                  </li>
                </ul>
  
              </div>
            </div>
          </div>
        </div>
  
        <div className="h-[20rem] px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 block lg:hidden"  aria-label="Sidebar">
            <ul className="space-y-2 relative font-medium z-[9999]">
              
               
  
              <li className=" z-[2999]">
               
  
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-gray transition duration-75 rounded-lg group  dark:text-2xl dark:hover:text-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                    <RiDashboard2Line className=" text-inherit  text-2xl" />
                  <span
                    className={`${
                      isSideOpen ? "inline-block" : "hidden"
                    } text-inherit  flex-1 ml-3 text-left whitespace-nowrap`}
                    sidebar-toggle-item="true"
                  >
                    Dashboards
                  </span>
                  <svg
                    sidebar-toggle-item="true"
                    className={`${
                      isSideOpen ? "inline-block" : "hidden"
                    } text-inherit text-gray w-6 h-6`}
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
                <ul id="dropdown-example" className="w-full  hidden py-2 space-y-2">
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
                  <li 
                   className=" text-gray  pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <span
                    onClick={() => console.log('object')}
                      href="/"
                      className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Ecommerce
                    </span>
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
                </ul>
                
  
  
  
  
  
  
  
              </li>
              <li>
              <button
                  type="button"
                  className="flex items-center w-full p-2 text-gray transition duration-75 rounded-lg group  dark:text-2xl dark:hover:text-gray-700"
                  aria-controls="dropdown-example1"
                  data-collapse-toggle="dropdown-example1"
                >
                    <RiApps2Line className=" text-inherit  text-2xl" />
                  <span
                    className={`${
                      isSideOpen ? "inline-block" : "hidden"
                    } text-inherit  flex-1 ml-3 text-left whitespace-nowrap`}
                    sidebar-toggle-item="true"
                  >
                    App
                  </span>
                  <svg
                    sidebar-toggle-item="true"
                    className={`${
                      isSideOpen ? "inline-block" : "hidden"
                    } text-inherit text-gray w-6 h-6`}
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
                <ul id="dropdown-example1" className="hidden py-2 space-y-2">
                  <li className=" text-gray  pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Calendar
                    </a>
                  </li>
                  <li className=" text-gray  pb-2 flex  w-1/3 items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Mailbox
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Products
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Product Details
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Create Product
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Orders
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Order Details
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Customers
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Shopping Carts
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Checkout
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Seller
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          List
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Overview
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Kanban Board
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          List View
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Contacts
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Companies
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Deals
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Transaction
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Buy & Sell
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Orders
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          My Wallet
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          ICO Lists
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          List View
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Details
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          List View
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Marketplace
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Explore now
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Live Auction
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Item Details
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Collections
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Creators
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Ranking
                        </a>
                      </li>
  
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Wallet Connect
                        </a>
                      </li>
  
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                  <li className=" text-gray  pb-2 flex  w-full items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      File Manager
                    </a>
                  </li>
                  <li className=" text-gray  pb-2 flex  w-full items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      To do
                    </a>
                  </li>
                  <li className=" text-gray  pb-2 flex items-center ">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                    >
                      Jobs
                      <span className="  px-2 py-1  ml-28 text-xs font-medium rounded-lg  text-white  bg-emerald-950  dark:bg-gray-700 dark:text-gray-300">
                        New
                      </span>
                    </a>
                  </li>
                  <li className=" text-gray  pb-2 flex items-center ">
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
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-start p-2 text-gray rounded-lg dark:text-white  dark:hover:bg-gray-700"
                >
                  <RiLayout3Line className=" text-inherit text-gray text-2xl" />
                  <span
                    className={`${
                      isSideOpen ? "inline-block" : "hidden"
                    } text-inherit  ml-3 whitespace-nowrap`}
                  >
                    Layout
                  </span>
                  {/* className={`${isSideOpen?'inline-block':'hidden'} text-inherit  flex-1 ml-3 text-left whitespace-nowrap`} */}
                  <span
                    className={`${
                      isSideOpen ? "inline-block" : "hidden"
                    } inline-flex items-center justify-center px-2 py-1 ml-3 text-xs font-medium  text-white  bg-red rounded-lg  dark:bg-gray-700 dark:text-gray-300`}
                  >
                    Hot
                  </span>
                </a>
              </li>
            </ul>
  
            {/* Pages */}
            <ul className=" pt-4 space-y-2 font-medium">
           
              
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-gray transition duration-75 rounded-lg group  dark:text-2xl dark:hover:text-gray-700"
                  aria-controls="dropdown-example11"
                  data-collapse-toggle="dropdown-example11"
                >
                  <RiAccountCircleLine className=" text-inherit  text-2xl" />
                  <span
                    className={`${
                      isSideOpen ? "inline-block" : "hidden"
                    } text-inherit  flex-1 ml-3 text-left whitespace-nowrap`}
                    sidebar-toggle-item="true"
                  >
                    Authentication
                  </span>
                  <svg
                    sidebar-toggle-item="true"
                    className={`${
                      isSideOpen ? "inline-block" : "hidden"
                    } text-inherit text-gray w-6 h-6`}
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
                <ul id="dropdown-example11" className="  hidden py-2 space-y-2">
                  <li>
                    <button
                      type="button"
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Basic
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          404 Basic
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          404 Cover
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          404 Alt
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex  text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          500
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
              </li>
              <li>
                <button
                  type="button"
                  className=" text-gray flex items-center w-full p-2  transition duration-75 rounded-lg group  dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example12"
                  data-collapse-toggle="dropdown-example12"
                >
                  <RiPagesLine className="  text-inherit  text-2xl" />
                  <span
                    className={`${
                      isSideOpen ? "inline-block" : "hidden"
                    } text-inherit  flex-1 ml-3 text-left whitespace-nowrap`}
                    sidebar-toggle-item="true"
                  >
                    Pages
                  </span>
                  <svg
                    sidebar-toggle-item="true"
                    className={`${
                      isSideOpen ? "inline-block" : "hidden"
                    } text-inherit text-gray w-6 h-6`}
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
                <ul id="dropdown-example12" className="hidden py-2 space-y-2">
                  <li className=" text-gray  pb-2 flex  w-1/3 items-center">
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
                      className="  text-gray  flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
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
                      <li onClick={() => nav('/profile/settings')} className=" text-gray  pb-2 flex  w-full items-center">
                        <span className=" text-xs  text-inherit ps-12">o</span>
                        <a
                          href="#"
                          className="flex text-xs  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                        >
                          Simple Page
                        </a>
                      </li>
                      <li className=" text-gray  pb-2 flex  w-full items-center">
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
                  <li className=" text-gray  pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Team
                    </a>
                  </li>
                  <li className=" text-gray  pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Timeline
                    </a>
                  </li>
                  <li className=" text-gray  pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      FAQs
                    </a>
                  </li>
                  <li className=" text-gray  pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className=" text-gray  pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Gallery
                    </a>
                  </li>
                  <li className=" text-gray  pb-2 flex  w-1/3 items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Maintainance
                    </a>
                  </li>
                  <li className=" text-gray  pb-2 flex  w-full items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Coming Soon
                    </a>
                  </li>
                  <li className=" text-gray  pb-2 flex  w-full items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Sitemap
                    </a>
                  </li>
                  <li className=" text-gray  pb-2 flex  w-full items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      Search Result
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-gray transition duration-75 rounded-lg group  dark:text-2xl dark:hover:text-gray-700"
                  aria-controls="dropdown-example40"
                  data-collapse-toggle="dropdown-example40"
                >
                  <RiRocketLine className=" text-inherit text-gray text-2xl" />
                  <span
                    className={`${
                      isSideOpen ? "inline-block" : "hidden"
                    } text-inherit  flex-1 ml-3 text-left whitespace-nowrap`}
                    sidebar-toggle-item="true"
                  >
                    Landing
                  </span>
                  <svg
                    sidebar-toggle-item="true"
                    className={`${
                      isSideOpen ? "inline-block" : "hidden"
                    } text-inherit text-gray w-6 h-6`}
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
                <ul id="dropdown-example40" className="  hidden py-2 space-y-2">
                  <li className=" text-gray  pb-2 flex  w-full items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className=" text-sm flex items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      One Page
                    </a>
                  </li>
                  <li className=" text-gray  pb-2 flex  w-full items-center">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-inherit"
                    >
                      NFT Landing
                    </a>
                  </li>
                  <li className=" text-gray  pb-2 flex items-center ">
                    <span className=" text-inherit ps-4">-</span>
                    <a
                      href="#"
                      className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                    >
                      Jobs
                      <span className="  px-2 py-1  ml-28 text-xs font-medium rounded-lg  text-white  bg-emerald-950  dark:bg-gray-700 dark:text-gray-300">
                        New
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
      </div>
    );
  };
  
  export default SideBarHor;
  
  
  