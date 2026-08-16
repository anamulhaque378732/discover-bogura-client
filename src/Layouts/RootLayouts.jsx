import { Outlet } from "react-router";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const RootLayouts = () => {
  return (
    <div>
      <div className="max-w-7xl  mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default RootLayouts;
