import { Outlet } from "react-router";
import OthersNavbar from "../Shared/OthersNavbar";

const AuthLayouts = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <OthersNavbar></OthersNavbar>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayouts;
