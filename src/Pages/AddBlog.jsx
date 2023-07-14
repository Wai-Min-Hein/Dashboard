import React, { useContext, useState } from "react";
import TopBar from "./TopBar";
import {
  RiImageEditLine,
  RiCalendar2Line,
} from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { StateContext } from "../Context/StateContext";

const Addblog = () => {
  const [tab, setTab] = useState("PersonalDetails");

  const {semi,detached }= useContext(StateContext)
  const [isImage,setIsImage] = useState(null)

  return (
    <div className={`z-50 bg-light-gray-bg dark:bg-dark-bg-color flex-1 font-header-regular min-h-screen overflow-y-auto  w-full relative  ${semi? 'px-[10rem]': ''}`} >
      {!detached&&
      <TopBar/>
      }

      <section className="bg-white p-6 shadow">
        <form action="">
            <div className="border-b border-b-gray">
            <label htmlFor="image" className="w-56 h-40 bg-bggreen flex justify-center items-center">
                {isImage ? (
                    <img src={URL.createObjectURL(isImage)}
                    alt=""  className="w-full h-full"/>
                ) : (
                    <RiImageEditLine className="text-4xl"/>
                )}
            `</label>
            `<input type="file" className="hidden" name="image" id="image" accept="image/*" onChange={(event)=>{setIsImage(event.target.files[0])}}/>
            </div>
            <div className="title my-6 flex flex-col">
                <label htmlFor="title" className="text-xl mb-2">Blog Title</label>
                <input type="text" id="title" className="border-gray-400 h-10 border focus:outline-none px-4 rounded-md" />
            </div>
            <div className="time mb-6">
                <label htmlFor="date" className="text-xl">
                    Date
                </label>
                <input type="date" className="h-8 border border-gray-300  focus:outline-none p-2 ml-6" id="date"/>
            </div>
            <div className="description flex flex-col">
                <label htmlFor="description" className="text-xl mb-2">Blog Description</label>
                <textarea name="description" id="description" cols="30" rows="10"  className="border border-gray-400 focus:outline-none rounded-md p-4 break-words"></textarea>
            </div>

            <div className="w-full text-end">
            <button className="border border-primary bg-primary focus:outline-none px-6 py-2 hover:bg-white hover:text-primary rounded-full mt-6 text-white shadow font-bold">
                <input type="submit" />
            </button>
            </div>
        </form>
      </section>

      <footer className=" w-full flex justify-between mt-6 items-center bg-white dark:bg-gray-900 text-gray p-4">
        <p>2023 © Velzon.</p>
        <p>Design & Develop by Themesbrand</p>
      </footer>
    </div>
  );
};

export default Addblog;