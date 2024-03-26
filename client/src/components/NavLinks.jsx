import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { useDashboardContext } from "../context/DashboardContext";
import propTypes from "prop-types";

export default function NavLinks({ isBigSidebar }) {
  const { toggleSidebar, user } = useDashboardContext();

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user;
        if (role !== "admin" && path === "admin") return;

        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}

NavLinks.propTypes = {
  isBigSidebar: propTypes.any,
};
