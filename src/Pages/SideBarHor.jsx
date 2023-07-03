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
        <div className="  w-full  bg-white dark:bg-dark-bg-color hidden lg:block">
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
                  className={`  text-[#6d7080] dark:text-gray  flex-1 ml-3 text-sm text-left whitespace-nowrap`}
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
              <div className="absolute w-[10rem] z-[9999999999] px-4  bg-white dark:bg-dark-bg-color  shadow-lg rounded-md top-[3rem] dash-child left-0">
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
                      className="flex text-sm  items-center  transition duration-75 rounded-lg pl-6 group  text-secondary"
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
                  className={`  text-[#6d7080] dark:text-gray flex-1 ml-3 text-sm text-left whitespace-nowrap`}
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
              <div className="absolute w-[12rem] bg-white dark:bg-dark-bg-color  shadow-lg rounded-md top-[3rem] app-child left-0">
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
                  className={`  text-[#6d7080] dark:text-gray flex-1 ml-3 text-sm text-left whitespace-nowrap`}
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
              <div className="absolute w-[10rem] px-4 bg-white dark:bg-dark-bg-color  shadow-lg rounded-md top-[3rem] lay-child left-0">
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
                  className={`  text-[#6d7080] dark:text-gray flex-1 ml-3 text-sm text-left whitespace-nowrap`}
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
              <div className="absolute w-[14rem] px-4 bg-white dark:bg-dark-bg-color  shadow-lg rounded-md top-[3rem] auth-child left-0">
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
                        className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-secondary"
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
                    text-[#6d7080] dark:text-gray flex-1 ml-3 text-sm text-left whitespace-nowrap`}
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
              <div className="absolute w-[12rem] px-4 bg-white dark:bg-dark-bg-color  shadow-lg rounded-md top-[3rem] page-child left-0">
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
                        className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-secondary"
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
                  className={` text-[#6d7080] dark:text-gray flex-1 ml-3 text-sm text-left whitespace-nowrap`}
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
  
              <div className="absolute w-[10rem] px-4 bg-white dark:bg-dark-bg-color  shadow-lg rounded-md top-[3rem] land-child left-0">
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
  
        
      </div>
    );
  };
  
  export default SideBarHor;
  
  
  

