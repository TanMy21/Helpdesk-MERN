import Logo from "../assets/img/Logo.svg";
import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg  text-uppercase fixed-top border"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <img src={Logo} className="nav-logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#">
                About
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <Link to="/login">
                <a className="nav-link py-3 px-0 px-lg-3 rounded nav-link" href="#">
                  Sign In
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
