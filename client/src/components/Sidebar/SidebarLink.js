import { Link } from "react-router-dom";
// import "./sidebar.css";
const SidebarLink = ({ pageLink, pageName, icon }) => {
  return (
    <li className="sidebar-nav-link-small">
      <Link to={pageLink} className="text-decoration-none">
        <div className="navlink-container-small">
          {icon}
          <span id="nav-text-small">{pageName}</span>
        </div>
      </Link>
    </li>
  );
};

export default SidebarLink;
