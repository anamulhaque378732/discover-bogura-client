import { Link } from "react-router";
import boguraLogo from "../../assets/bogura.png";
const Logo = () => {
  return (
    <div>
      <Link to="/" className="flex gap-2">
        <img className="w-10 rounded-xl" src={boguraLogo} alt="Bogura logo" />
        <p> Bogura</p>
      </Link>
    </div>
  );
};

export default Logo;
