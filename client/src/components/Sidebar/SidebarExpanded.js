import { Link } from "react-router-dom";
import { GoDashboard } from "react-icons/go";
import { RiTicket2Line } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import Logo from "../../assets/img/Logo2.svg";
import "./sidebar.css";

const SidebarExpanded = ({ changeWidth }) => {
  return (
    <div className="sidebar-container">
      <div className="col justify-content-center mt-2">
        <div className="row" id="sb-icon">
          <div className="col-3">
            <button className="btn-hb" onClick={changeWidth}>
              <GiHamburgerMenu className="hb-icon" />
            </button>
          </div>
          <div className="col-9 sb-logo">
            <Link to="/">
              <img src={Logo} className="sb-icon" />
            </Link>
          </div>
        </div>
        <div className="row">
          <ul>
            <li className="mb-2">
              <Link to="/dashboard" className="nav-link">
                <div className="row d-flex justify-content-start">
                  <div className="col-2">
                    <GoDashboard id="nav-icon-expanded" />
                  </div>
                  <div className="col-10" id="nav-text-expanded">
                    Dashboard
                  </div>
                </div>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/new-ticket" className="nav-link">
                <div className="row d-flex justify-content-start nl-hover">
                  <div className="col-2">
                    <IoCreateOutline id="nav-icon-expanded" />
                  </div>
                  <div className="col-10" id="nav-text-expanded">
                    New Ticket
                  </div>
                </div>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/all-tickets" className="nav-link">
                <div className="row d-flex justify-content-start">
                  <div className="col-2">
                    <RiTicket2Line id="nav-icon-expanded" />
                  </div>
                  <div className="col-10" id="nav-text-expanded">
                    All Tickets
                  </div>
                </div>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/settings" className="nav-link">
                <div className="row d-flex justify-content-start">
                  <div className="col-2">
                    <IoSettingsOutline id="nav-icon-expanded" />
                  </div>
                  <div className="col-10" id="nav-text-expanded">
                    Settings
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarExpanded;
