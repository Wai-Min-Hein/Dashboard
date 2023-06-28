import { Route, Routes } from "react-router-dom";
import SideBar from "./Pages/SideBar";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <div className="flex items-start justify-start h-screen">
      <SideBar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>

    </div>
  );
};

export default App;
