import { GoDashboard } from "react-icons/go";
import { RiTicket2Line } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import Logo2 from "../../assets/img/Logo2.svg";
import "./sidebar.css";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-area">
        <div className="sidebar-logo">
          <img src={Logo2} className="sidebar-logo-img" />
        </div>
      </div>
      <div className="sidebar-navigation">
        <ul className="sidebar-nav-links">
          <SidebarLink
            pageLink={"/dashboard"}
            icon={<GoDashboard id="nav-icon-small" />}
            pageName={"Dashboard"}
          />
          <SidebarLink
            pageLink={"/new-ticket"}
            icon={<IoCreateOutline id="nav-icon-small" />}
            pageName={"New Ticket"}
          />
          <SidebarLink
            pageLink={"/all-tickets"}
            icon={<RiTicket2Line id="nav-icon-small" />}
            pageName={"All Tickets"}
          />
          <SidebarLink
            pageLink={"/settings"}
            icon={<IoSettingsOutline id="nav-icon-small" />}
            pageName={"Settings"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
