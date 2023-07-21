import React, { useContext, useEffect, useState } from "react";
import TopBar from "./TopBar";
import { RiImageEditLine, RiCalendar2Line } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { StateContext } from "../Context/StateContext";
import { useNavigate } from "react-router-dom";
import blog from "../../Image/blogging.svg";

const Addblog = () => {
  const [tab, setTab] = useState("PersonalDetails");

  const { semi, detached } = useContext(StateContext);
  const [isImage, setIsImage] = useState(null);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  const nav = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    !token && nav("/logout");
  }, []);

  const label = {
    open: {
      opacity: 1,
      visibility: "visible",
      y: 0,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      visibility: "hidden",
      y: "1.4rem",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      className={`z-50 bg-light-gray-bg dark:bg-dark-bg-color flex-1 font-header-regular overflow-y-auto  w-full relative flex flex-col justify-between ${
        semi ? "px-[10rem]" : ""
      } `}
    >
      {!detached && <TopBar />}

      <section className="bg-white dark:bg-dark-bg-color p-6 shadow flex items-stretch justify-between gap-16">
        <div className="basis-1/2 hidden sm:block">
          <img src={blog} alt="" />
        </div>

        <form action="" className="basis-full sm:basis-1/2">
        <div className="">
            <label
              htmlFor="image"
              className={`w-40 h-32 md:w-40 md:h-40 rounded-md overflow-hidden ${isImage? 'bg-transparent':'bg-[#709ff5] dark:bg-[#88aae9]'} dark:text-gray-200 flex justify-center items-center cursor-pointer`}
            >
              {isImage ? (
                <img
                  src={URL.createObjectURL(isImage)}
                  alt=""
                  className=" block"
                />
              ) : (
                <RiImageEditLine className="text-2xl text-white" />
              )}
              `
            </label>
            `
            <input
              type="file"
              className="hidden"
              name="image"
              id="image"
              accept="image/*"
              onChange={(event) => {
                setIsImage(event.target.files[0]);
              }}
            />
          </div>
          <div className="relative">
            <motion.label
              initial={"closed"}
              animate={title != "" ? "open" : "closed"}
              variants={label}
              htmlFor="title"
              className="font-para text-light-para-color dark:text-dark-para-color absolute top-[-.5rem] ml-3  text-[.9rem]  bg-white dark:bg-dark-bg-color px-2"
            >
              Blog Title
            </motion.label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              placeholder="Blog Title"
              className="focus:outline-none text-[.9rem] border border-gray-400  px-4 py-4 rounded-md font-para text-light-para-color dark:text-dark-para-color bg-transparent w-full"
            />
          </div>
          <div className="relative mt-8">
            <motion.label
              initial={"closed"}
              animate={post != "" ? "open" : "closed"}
              variants={label}
              htmlFor="title"
              className="font-para text-light-para-color dark:text-dark-para-color absolute top-[-.5rem] ml-3  text-[.9rem]  bg-white  dark:bg-dark-bg-color px-2"
            >
              Blog Post
            </motion.label>
            <textarea
              value={post}
              onChange={(e) => setPost(e.target.value)}
              type="text"
              id="title"
              rows={6}
              placeholder="Blog Post"
              className="focus:outline-none  text-[.9rem] border border-gray-400  px-4 py-4  font-para text-light-para-color dark:text-dark-para-color bg-transparent  w-full rounded-md"
            />
          </div>
          <div className="w-full text-end">
            <button  onClick={(e) => e.preventDefault()} className="border border-secondary bg-secondary duration-150 focus:outline-none px-6 py-2 hover:bg-transparent hover:text-primary rounded-full mt-6 text-white shadow font-bold">
              <input type="submit" />
            </button>
          </div>
        </form>
      </section>

      <footer className=" w-full flex justify-between items-center bg-white dark:bg-gray-900 text-gray p-4 mt-4">
        <p>2023 © Velzon.</p>
        <p>Design & Develop by Themesbrand</p>
      </footer>
    </div>
  );
};

export default Addblog;

// <form action="" className=" basis-1/2">
//           <div className="">
//             <label
//               htmlFor="image"
//               className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden bg-[#709ff5] dark:bg-[#88aae9] dark:text-gray-200 flex justify-center items-center cursor-pointer"
//             >
//               {isImage ? (
//                 <img
//                   src={URL.createObjectURL(isImage)}
//                   alt=""
//                   className=" block"
//                 />
//               ) : (
//                 <RiImageEditLine className="text-4xl" />
//               )}
//               `
//             </label>
//             `
//             <input
//               type="file"
//               className="hidden"
//               name="image"
//               id="image"
//               accept="image/*"
//               onChange={(event) => {
//                 setIsImage(event.target.files[0]);
//               }}
//             />
//           </div>
//           <div className="title my-6 flex flex-col">
//             <label
//               htmlFor="title"
//               className="text-[1rem] md:text-lg text-light-header-color mb-2  font-para  dark:text-dark-header-color"
//             >
//               Blog Title
//             </label>
//             <input
//               type="text"
//               id="title"
//               className="font font-para text-[.9rem] border-gray-400 dark:bg-dark-bg-color dark:border-gray-500 h-10 border focus:outline-none px-4 rounded-md"
//             />
//           </div>

//           <div className="description flex flex-col">
//             <label
//               htmlFor="description"
//               className="text-[1rem] text-lg text-light-header-color mb-2  font-para  dark:text-dark-header-color"
//             >
//               Blog Description
//             </label>
//             <textarea
//               name="description"
//               id="description"
//               cols="30"
//               rows="10"
//               className="border border-gray-400 font font-para text-[.9rem] dark:bg-dark-bg-color dark:border-gray-500 focus:outline-none rounded-md p-4 break-words"
//             ></textarea>
//           </div>

//           <div className="w-full text-end">
//             <button  onClick={(e) => e.preventDefault()} className="border border-secondary bg-secondary duration-150 focus:outline-none px-6 py-2 hover:bg-white hover:text-primary rounded-full mt-6 text-white shadow font-bold">
//               <input type="submit" />
//             </button>
//           </div>
//         </form>
