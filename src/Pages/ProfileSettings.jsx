import React, { useContext, useState } from "react";
// import TopBar from "./TopBar";
import {
  RiImageEditLine,
  RiCameraFill,
  RiEditBoxLine,
  RiAddFill,
  RiGlobalLine,
  RiBasketballLine,
  RiPinterestFill,
} from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import ChangePassword from "../components/ChangePassword";
import Experience from "../components/Experience";
import PersonalDetails from "../components/PersonalDetails";
import PrivacyPolicy from "../components/PrivacyPolicy";
import { motion, AnimatePresence } from "framer-motion";
import { StateContext } from "../Context/StateContext";

const ProfileSettings = () => {
  const [tab, setTab] = useState("PersonalDetails");

  const {semi }= useContext(StateContext)

  return (
    <div className={`z-50 bg-light-gray-bg flex-1 font-header-regular min-h-screen overflow-y-auto  w-full relative  ${semi? 'px-[10rem]': ''}`} >
      {/* <TopBar/> */}
      <div className="relative md:h-[260px]">
        <img
          src="https://themesbrand.com/velzon/html/default/assets/images/profile-bg.jpg"
          alt="Cover"
          className="w-full h-full object-cover bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171e32] to-[#405189] opacity-90"></div>
        <button className="absolute flex items-center text-xs sm:text-sm gap-1 rounded-md bg-light-gray-bg top-4 end-4 p-2">
          <RiImageEditLine />
          <span>Change Cover</span>
        </button>
      </div>

      <div className=" lg:flex bg-light-gray-bg">
        <aside className="w-full lg:w-1/4 flex flex-col items-center p-4 gap-16 mb-10 lg:mb-0">
          <div className="w-full p-4 relative text-center bg-white rounded-lg -mt-10">
            <div className="relative inline-block my-3">
              <img
                className="w-28 h-28 object-cover rounded-full p-1 bg-light-gray-bg border border-light max-w-full"
                src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
                alt="profile"
              />
              <div className="absolute right-0 left-auto bottom-0 cursor-pointer mx-auto mb-4">
                <input
                  type="file"
                  className="hidden"
                  id="profile-img-file-input"
                />
                <label
                  htmlFor="profile-img-file-input"
                  className="absolute right-0 left-auto bottom-0 w-8 h-8 bg-light flex justify-center items-center rounded-full"
                >
                  <RiCameraFill />
                </label>
              </div>
            </div>
            <h5 className="text-lg">Anna Adame</h5>
            <p className="mb-0 text-sm text-slate-500 text-opacity-50">
              Lead Designer / Developer
            </p>
          </div>

          <div className="w-full p-4 relative text-center bg-white rounded-lg -mt-10 flex flex-col gap-10">
            <div className="flex justify-between">
              <h3>Complete Your Profile</h3>
              <button className="px-2 py-1 bg-light-gray-bg text-light-side-bar-color flex justify-center items-center text-xs">
                <RiEditBoxLine />
                <span>Edit</span>
              </button>
            </div>
            <div className="w-full relative">
              <div className="shadow w-full bg-light-gray-bg rounded-full p-1 flex">
                <div className="bg-orange w-[30%] text-xs leading-none py-1 text-center text-white rounded-full"></div>
                <div className="w-2 h-2 bg-white -ms-2.5 rounded-full"></div>
                <div className="text-xs p-1 absolute left-16 -top-7 text-white bg-light-side-bar-color rounded">
                  30%
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-4 relative text-center bg-white rounded-lg -mt-10">
            <div className="flex justify-between mb-5">
              <h3>Portfolio</h3>
              <button className="px-2 py-1 bg-light-gray-bg text-light-side-bar-color flex justify-center items-center text-xs">
                <RiAddFill />
                <span>Add</span>
              </button>
            </div>
            <div className="w-full flex justify-between items-center mb-4">
              <label
                htmlFor="githubLink"
                className=" w-8 h-8 bg-black flex justify-center items-center rounded-full"
              >
                <VscGithub className="text-black bg-white rounded-full" />
              </label>
              <input
                className="appearance-none block w-5/6 text-sm px-3 py-2 bg-white text-gray-700 border border-gray-300 rounded leading-tight focus:outline-none focus:border-gray-400"
                id="githubLink"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="w-full flex justify-between items-center mb-4">
              <label
                htmlFor="globalLink"
                className=" w-8 h-8 bg-light-side-bar-color flex justify-center items-center rounded-full"
              >
                <RiGlobalLine className="text-light-side-bar-color bg-white rounded-full" />
              </label>
              <input
                className="appearance-none block w-5/6 text-sm px-3 py-2 bg-white text-gray-700 border border-gray-300 rounded leading-tight focus:outline-none focus:border-gray-400"
                id="globalLink"
                type="text"
                placeholder="www.example.com"
              />
            </div>
            <div className="w-full flex justify-between items-center mb-4">
              <label
                htmlFor="globalLink1"
                className=" w-8 h-8 bg-green flex justify-center items-center rounded-full"
              >
                <RiBasketballLine className="text-white bg-green rounded-full" />
              </label>
              <input
                className="appearance-none block w-5/6 text-sm px-3 py-2 bg-white text-gray-700 border border-gray-300 rounded leading-tight focus:outline-none focus:border-gray-400"
                id="globalLink1"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="w-full flex justify-between items-center mb-4">
              <label
                htmlFor="pinterestName"
                className=" w-8 h-8 bg-red flex justify-center items-center rounded-full"
              >
                <RiPinterestFill className="text-white bg-red rounded-full" />
              </label>
              <input
                className="appearance-none block w-5/6 text-sm px-3 py-2 bg-white text-gray-700 border border-gray-300 rounded leading-tight focus:outline-none focus:border-gray-400"
                id="pinterestName"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>
        </aside>
        <section className="w-full lg:w-3/4 h-full p-4">
          <div className="w-full relative bg-white -mt-10 rounded-lg">
            <nav className="w-full border-b-2 border-gray-300">
              <AnimatePresence>
                <ul className="flex cursor-pointer text-light-side-bar-color ps-2">
                  <motion.li
                    onClick={(e) => setTab("PersonalDetails")}
                    className={`p-3  ${tab === "PersonalDetails" && "active"}`}
                    transition={{ delay: 1 }}
                  >
                    Personal Detail
                  </motion.li>
                  <motion.li
                    onClick={(e) => setTab("ChangePassword")}
                    className={`p-3  ${tab === "ChangePassword" && "active"}`}
                    transition={{ delay: 1 }}
                  >
                    Change Password
                  </motion.li>
                  <li
                    onClick={(e) => setTab("Experience")}
                    className={`p-3  ${tab === "Experience" && "active"}`}
                  >
                    Experience
                  </li>
                  <li
                    onClick={(e) => setTab("PrivacyPolicy")}
                    className={`p-3  ${tab === "PrivacyPolicy" && "active"}`}
                  >
                    Privacy Policy
                  </li>
                </ul>
              </AnimatePresence>
            </nav>
            {tab === "PersonalDetails" && <PersonalDetails />}
            {tab === "ChangePassword" && <ChangePassword />}
            {tab === "Experience" && <Experience />}
            {tab === "PrivacyPolicy" && <PrivacyPolicy />}
          </div>
        </section>
      </div>

      <footer className=" w-full flex justify-between items-center bg-white text-gray p-4">
        <p>2023 © Velzon.</p>
        <p>Design & Develop by Themesbrand</p>
      </footer>
    </div>
  );
};

export default ProfileSettings;
