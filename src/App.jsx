import { Route, Routes } from "react-router-dom";
import Ecommerce from "./Pages/Ecommerce";
import SideBar from "./Pages/SideBar";

const App = () => {
  return (
    <div className="flex items-start justify-start h-screen">
      <SideBar />
      

      <Routes>
        <Route path="/" element={<Ecommerce />} />
      </Routes>

    </div>
  );
};

export default App;
