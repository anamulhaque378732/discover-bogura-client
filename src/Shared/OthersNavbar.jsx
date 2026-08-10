import { NavLink } from "react-router";
import Logo from "../Components/Logo/Logo";

const OthersNavbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Logo></Logo>
      </div>

      <div className="navbar-end gap-2">
        <NavLink to="/register">
          <button className="btn btn-secondary"> Register</button>
        </NavLink>
        <NavLink to="/login">
          <button className="btn btn-primary"> Login</button>
        </NavLink>
      </div>
    </div>
  );
};

export default OthersNavbar;
