import "flowbite/dist/flowbite.min.js";
import {
  RiDashboard2Line,
  RiApps2Line,
  RiLayout3Line,
  RiAccountCircleLine,
  RiPagesLine,
  RiRocketLine,
} from "react-icons/ri";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../Context/StateContext";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
const SideCompact = () => {
  const nav = useNavigate();
  const { isSideOpen, sideLight, sideDark, sideGradient,img,img1,img2,img3,img4 } =
    useContext(StateContext);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1537px)",
  });
  const laptop = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const tablet = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const phone = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const smPhone = useMediaQuery({
    query: "(min-width: 640px)",
  });

  const Sidebar_animation = {
    open: {
      width: "16rem",
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "5rem",
      transition: {
        damping: 40,
      },
    },
  };

  const Sidebar_animationR = {
    open: {
      width: "16rem",
      x: 0,
      transition: {
        damping: 40,
      },
    },
    closed: {
      width: "0",
      x: "-100px",
      transition: {
        damping: 40,
      },
    },
  };

  
 const BgImg = (img1&&`bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-1.jpg')]` )||  (img2&& `bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-2.jpg')]`)|| (img3&& `bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-3.jpg')]`)||  (img4&& `bg-[url('https://themesbrand.com/velzon/html/default/assets/images/sidebar/img-4.jpg')]`)


  return (
    <div className={`${BgImg? BgImg: 'bg-light-side-bar-color'} ${img &&sideLight? 'bg-white  dark:bg-dark-side-bar-color': ''} ${img &&sideDark? 'bg-light-side-bar-color': ''} ${img && sideGradient? ' bg-sideGradient': ''} relative max-h-screen overflow-y-auto w-[12rem] side-compact z-50`}>


{
        (sideDark&& (

          <div className="absolute top-0 left-0 h-full inset-0 bg-gradient-to-t from-[#171e32] to-[#405189] opacity-80 z-[-1]"></div>
        ))|| (sideGradient&& (

          <div className="absolute top-0 left-0 inset-0 h-full  bg-sideGradient opacity-80  z-[-1]"></div>
        ))|| (sideLight&& (

          <div className="absolute top-0 left-0 inset-0 h-full bg-gradient-to-t from-[#fff] to-[#fff] opacity-90 z-[-5]"></div>

        ))
      }





      <aside
        id="default-sidebar"
        className="   z-40 w-full "
        aria-label="Sidebar"
      >
        <div className=" my-6 flex  items-center justify-center font-para text-4xl font-extrabold text-center">
          <img
            className="  h-[19px]"
            src="https://themesbrand.com/velzon/html/default/assets/images/logo-light.png"
            alt=""
          />
        </div>
        <div className="  py-4  bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium text-center">
            {isSideOpen && (
              <h1 className=" ms-1 mb-4 p-2 text-light-side-bar-menu-color  text-sm">
                Menu
              </h1>
            )}

            <li className=" text-center z-[2999]">
              <button
                type="button"
                className="flex flex-col gap-2 items-center w-full p-2 text-light-side-bar-text-color transition duration-75 rounded-lg group hover:text-white  dark:hover:text-gray-700"
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
              </button>
              <ul
                id="dropdown-example"
                className="w-full  hidden py-2 space-y-2 text-center"
              >
                <li className=" text-center text-light-side-bar-text-color hover:text-white pb-2 ">
                  <button className="  transition duration-75 rounded-lg pl-6 group  text-inherit">
                    Analytics
                  </button>
                </li>
                <li className=" text-center text-light-side-bar-text-color hover:text-white pb-2 ">
                  <button className="  transition duration-75 rounded-lg pl-6 group  text-inherit">
                    CRM
                  </button>
                </li>
                <li className=" text-center text-light-side-bar-text-color hover:text-white pb-2 ">
                  <button
                    href="/"
                    className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Ecommerce
                  </button>
                </li>
                <li className=" text-center text-light-side-bar-text-color hover:text-white pb-2 ">
                  <button className="  transition duration-75 rounded-lg pl-6 group  text-inherit">
                    Crypto
                  </button>
                </li>
                <li className=" text-center text-light-side-bar-text-color hover:text-white pb-2 ">
                  <button className="  transition duration-75 rounded-lg pl-6 group  text-inherit">
                    Projects
                  </button>
                </li>
                <li className=" text-center text-light-side-bar-text-color hover:text-white pb-2 ">
                  <button className="  transition duration-75 rounded-lg pl-6 group  text-inherit">
                    NFT
                  </button>
                </li>
                <li className=" text-center text-light-side-bar-text-color hover:text-white pb-2 ">
                  <button className="   transition duration-75 rounded-lg pl-6 group  text-inherit">
                    Job
                  </button>
                </li>
              </ul>
            </li>

            <li className="mx-auto">
              <button
                type="button"
                className="flex flex-col gap-2 items-center w-full p-2 text-light-side-bar-text-color transition duration-75 rounded-lg group hover:text-white  dark:hover:text-gray-700 mx-auto"
                aria-controls="dropdown-example1"
                data-collapse-toggle="dropdown-example1"
              >
                <RiApps2Line className=" text-inherit  text-2xl" />
                <span
                  className={`${
                    isSideOpen ? "inline-block" : "hidden"
                  } text-inherit  flex-1  text-left whitespace-nowrap`}
                  sidebar-toggle-item="true"
                >
                  App
                </span>
              </button>

              <ul
                id="dropdown-example1"
                className="hidden py-2 space-y-2 text-center"
              >
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 text-center ">
                  <button
                    href="#"
                    className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Calendar
                  </button>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 ">
                  <button
                    href="#"
                    className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    Chat
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="  text-light-side-bar-text-color hover:text-white flex items-center p-2 w-full transition duration-75 rounded-lg group  0"
                    aria-controls="dropdown-example2"
                    data-collapse-toggle="dropdown-example2"
                  >
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
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Mailbox
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Email Templates
                      </button>
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
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Products
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Product Details
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Create Product
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Orders
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Order Details
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Customers
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Shopping Carts
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Checkout
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Seller
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Seller Details
                      </button>
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
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        List
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Overview
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Create Project
                      </button>
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
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Kanban Board
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        List View
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Task Details
                      </button>
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
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Contacts
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Companies
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Deals
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Leads
                      </button>
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
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Transaction
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Buy & Sell
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Orders
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        My Wallet
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        ICO Lists
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        KYC Application
                      </button>
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
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        List View
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Details
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Create Invoice
                      </button>
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
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        List View
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Ticket Details
                      </button>
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
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Marketplace
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Explore now
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Live Auction
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Item Details
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Collections
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Creators
                      </button>
                    </li>
                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Ranking
                      </button>
                    </li>

                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Wallet Connect
                      </button>
                    </li>

                    <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                      <button
                        href="#"
                        className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                      >
                        Create NFT
                      </button>
                    </li>
                  </ul>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                  <button
                    href="#"
                    className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    File Manager
                  </button>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex  w-full items-center">
                  <button
                    href="#"
                    className="  transition duration-75 rounded-lg pl-6 group  text-inherit"
                  >
                    To do
                  </button>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex items-center ">
                  <button
                    href="#"
                    className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                  >
                    Jobs
                  </button>
                </li>
                <li className=" text-light-side-bar-text-color hover:text-white pb-2 flex items-center ">
                  <button
                    href="#"
                    className="flex-1 text-sm  items-center text-left  transition duration-75 rounded-lg ml-6 group whitespace-nowrap text-inherit"
                  >
                    API Keys
                  </button>
                </li>
              </ul>
            </li>

            <li>
              <button
                href="#"
                className="flex flex-col gap-2 items-center t justify-center w-full p-2 text-light-side-bar-text-color rounded-lg dark:text-white hover:text-white dark:hover:bg-gray-700"
              >
                <RiLayout3Line className=" text-inherit text-light-side-bar-text-color text-2xl" />
                <span
                  className={`${
                    isSideOpen ? "inline-block" : "hidden"
                  } text-inherit  ml-3 whitespace-nowrap`}
                >
                  Layout
                </span>
                
              </button>
            </li>


          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideCompact;
