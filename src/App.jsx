import { Route, Routes } from "react-router-dom";
import SideBar from "./Pages/SideBar";

// import Home from "./Pages/Home";
import ProfileSettings from "./Pages/ProfileSettings";
// import TopBar from "./Pages/TopBar";
import Test from "./Pages/Test";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Ecommerce from "./Pages/Ecommerce";
import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import { useContext, useState } from "react";
import { StateContext } from "./Context/StateContext";
import SettingBar from "./Components/SettingBar";
import SideBarTwo from "./Pages/SideBarTwo";
import PasswordReset from "./Pages/PassReset";
import { useLocation } from "react-router-dom/dist";
import SideSmallHover from "./Pages/SideSmallHover";
import SideBoxed from "./Pages/SideBoxed";
import SideCompact from "./Pages/SideCompact";
import TopBar from "./Pages/TopBar";
import SideBarHor from "./Pages/SideBarHor";
import SmallIconView from "./Pages/SmallIconView";

const App = () => {
  const variant = {
    open: { rotate: 360, transition: { duration: 3, repeat: Infinity } },
    closed: { transition: { duration: 0 } },
  };

  const {
    setting,
    setSetting,
    tCol,
    hor,
    detached,
    ver,
    compact,
    boxed,
    smallIcon,
    smallHover,
  } = useContext(StateContext);

  const location = useLocation();
  return (
    <div className="relative z-10">
      {detached ? (
        <div className={`z-[-1]  relative  ${detached ? "" : " "}`}>
          <TopBar />
          <div
            className={`flex items-stretch justify-start max-h-screen  font-para relative bg-light-gray-bg  dark:bg-dark  ${
              hor ? "z-[-1]" : ""
            } ${boxed ? "mx-[6rem]" : ""}`}
          >
            {location.pathname == "/password-reset" ? (
              <div className="w-0 h-0 "></div>
            ) : hor ? (
              ""
            ) : tCol ? (
              <SideBarTwo />
            ) : (
              <SideBar />
            )}

            <motion.span
              initial={"closed"}
              animate={"open"}
              variants={variant}
              onClick={() => setSetting(!setting)}
              className="fixed z-[1000] px-4 py-4 rounded-full bg-info bottom-[2rem] right-[2rem] cursor-pointer hidden md:block"
            >
              <FiSettings className=" text-white font-semibold text-xl " />
            </motion.span>
            <SettingBar />

            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/profile/settings" element={<ProfileSettings />} />
              <Route path="/test" element={<Test />} />

              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/password-reset" element={<PasswordReset />} />
              <Route path="/" element={<Ecommerce />} />
            </Routes>
          </div>
        </div>
      ) : (
        // to add  mx-[6rem] at some state
        <div
          className={`flex items-stretch justify-start max-h-screen  font-para relative bg-light-gray-bg  dark:bg-dark  ${
            hor ? "z-[-1]" : ""
          } ${boxed ? "mx-[6rem]" : ""}`}
        >
          {location.pathname == "/password-reset" ? (
            <div className="w-0 h-0"></div>
          ) : hor ? (
            ""
          ) : tCol ? (
            <SideBarTwo />
          ) : (
            <SideBar />
          )

          // (tCol&& <SideBarTwo/>) || (ver&& <SideBar/>)|| (compact&& <SideCompact/>)|| (hor&& <SideBarHor/>)|| (boxed&& <SideBoxed/>)||(smallHover&& <SideSmallHover/>)|| (smallIcon&& <SmallIconView/>)
          }

          <motion.span
            initial={"closed"}
            animate={"open"}
            variants={variant}
            onClick={() => setSetting(!setting)}
            className="fixed z-[1000] px-4 py-4 rounded-full bg-info bottom-[2rem] right-[2rem] cursor-pointer hidden md:block"
          >
            <FiSettings className=" text-white font-semibold text-xl " />
          </motion.span>
          <SettingBar />

          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/profile/settings" element={<ProfileSettings />} />
            <Route path="/test" element={<Test />} />

            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/" element={<Ecommerce />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
