import { Link } from "react-router";
import boguraLogo from "../../assets/bogura.png";
const LogoLarge = () => {
  return (
    <div>
      <Link to="/">
        <img className="w-20 rounded-xl" src={boguraLogo} alt="Bogura logo" />
      </Link>
    </div>
  );
};

export default LogoLarge;
