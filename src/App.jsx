import { Route, Routes } from "react-router-dom";
import Ecommerce from "./Pages/Ecommerce";
import SideBar from "./Pages/SideBar";
import TopBar from "./Pages/TopBar";

const App = () => {
  return (
    <div className="flex items-start justify-start h-screen">
      <SideBar />
      <div className="flex-1">
        <TopBar/>

      <Routes>
        <Route path="/" element={<Ecommerce />} />
      </Routes>

      </div>
    </div>
  );
};

export default App;
