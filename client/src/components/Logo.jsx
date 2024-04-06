import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";

export default function Logo() {
  return (
    <Link to="/dashboard">
      <img src={logo} alt="jobify" className="logo" />;
    </Link>
  );
}
