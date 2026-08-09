import { Outlet } from "react-router";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const RootLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayouts;
