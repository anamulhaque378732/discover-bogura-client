import { NavLink } from "react-router";
import Logo from "../Components/Logo/Logo";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";

const OthersNavbar = () => {
  const { user, logOut } = UseAuth();
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Logout Failed!",
          text: `${error.message}`,
        });
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <Logo></Logo>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/register">
              <button className="btn btn-secondary"> Register</button>
            </NavLink>
            <NavLink to="/login">
              <button className="btn btn-primary"> Login</button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default OthersNavbar;
