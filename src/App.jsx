import { Route, Routes } from "react-router-dom";
import SideBar from "./Pages/SideBar";
// import Home from "./Pages/Home";
import ProfileSettings from "./Pages/ProfileSettings";
// import TopBar from "./Pages/TopBar";
import Test from "./Pages/Test";

const App = () => {
  return (
    <div className="flex items-start justify-start h-screen">
      <SideBar />
      

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/profile/settings" element={<ProfileSettings/>} />
        <Route path="/test" element={<Test />} />
      </Routes>

    </div>
  );
};

export default App;
