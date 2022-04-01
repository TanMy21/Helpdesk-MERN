import { NavLink } from "react-router-dom";
import "./sidebar.css";
const SidebarLink = ({ pageLink, pageName, icon }) => {
  return (
    <li className="sidebar-nav-link-small">
      <NavLink to={pageLink} className="text-decoration-none" activeclassname="sidebar-links-active">
        <div className="navlink-container-small">
          {icon}
          <span id="nav-text-small">{pageName}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default SidebarLink;
