import { Link } from "react-router";
import boguraLogo from "../../assets/bogura.png";
const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="w-10 rounded-xl" src={boguraLogo} alt="Bogura logo" />
      </Link>
    </div>
  );
};

export default Logo;
