import { Outlet } from "react-router";

import Logo from "../Components/Logo/Logo";

const AuthLayouts = () => {
  return (
    <div className="max-w-5xl mx-auto mt-2 bg-gray-50 ">
      <Logo></Logo>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayouts;
