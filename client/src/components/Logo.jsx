import { Link } from "react-router-dom";
import logo from "../assets/images/jobsterlogo.svg";

export default function Logo() {
  return (
    <Link to="/dashboard">
      <img src={logo} alt="jobify" className="logo" width={150} />
    </Link>
  );
}
