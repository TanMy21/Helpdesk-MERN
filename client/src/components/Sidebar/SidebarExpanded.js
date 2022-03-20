import { Link } from "react-router-dom";
import { GoDashboard } from "react-icons/go";
import { RiTicket2Line } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
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
            <li>
              <Link to="/dashboard" className="link">
                <div className="nav-link-expanded">
                  <div className="row nv-link">
                    <div className="col">
                      <GoDashboard id="nav-icon-expanded" />
                    </div>
                    <div className="col" id="nav-text-expanded">
                      Dashboard
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="link">
                <div className="nav-link-expanded">
                  <div className="row nv-link">
                    <div className="col">
                      <IoCreateOutline id="nav-icon-expanded" />
                    </div>
                    <div className="col" id="nav-text-expanded">
                      NewTicket
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="link">
                <div className="nav-link-expanded">
                  <div className="row nv-link">
                    <div className="col">
                      <RiTicket2Line id="nav-icon-expanded" />
                    </div>
                    <div className="col" id="nav-text-expanded">
                      AllTickets
                    </div>
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
