import { Outlet } from "react-router";
import Logo from "../Components/Logo/Logo";
import Footer from "../Shared/Footer";

const UpazilasLayout = () => {
  return (
    <>
      <div className="max-w-7xl mt-2  mx-auto">
        <Logo></Logo>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default UpazilasLayout;
