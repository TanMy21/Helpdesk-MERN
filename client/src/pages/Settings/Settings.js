import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { FaSignOutAlt } from "react-icons/fa";
// import { logout, reset } from "../../features/auth/authSlice";
import "./settings.css";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import { HiOutlineMail } from "react-icons/hi";
import { CgWebsite } from "react-icons/cg";
import { BsChatLeftTextFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
import { MdWidgets } from "react-icons/md";
import { BsHeadphones } from "react-icons/bs";
import { GiTicket } from "react-icons/gi";
import { BsLayoutTextSidebarReverse } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { SiSpringsecurity } from "react-icons/si";
import { MdTimer } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { BsFillTagsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    return () => {
      // dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  // const onLogout = () => {
  //   dispatch(logout());
  //   dispatch(reset());
  //   navigate("/");
  // };

  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <div className="main-container">
          <Navbar title={"Settings"} titleLink="settings"/>
          <div className="main-content">
            <div className="content d-flex align-items-center justify-content-center">
              <div className="channel-settings-container">
                <div className="channel-settings">
                  <div className="settings-title">Channel Settings</div>
                  <hr />
                  <div className="settings-row">
                    <div className="settings-col">
                      <Link to="/error" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <HiOutlineMail />
                          </div>
                          <div id="settings-title">Email</div>
                        </div>
                      </Link>
                    </div>
                    <div className="settings-col">
                      <Link to="/error" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <CgWebsite />
                          </div>
                          <div id="settings-title">Portal</div>
                        </div>
                      </Link>
                    </div>
                    <div className="settings-col">
                      <Link to="/error" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <BsChatLeftTextFill />
                          </div>
                          <div id="settings-title">Chat</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="settings-row">
                    <div className="settings-col">
                      <Link to="/error" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <BiPhoneCall />
                          </div>
                          <div id="settings-title">Phone</div>
                        </div>
                      </Link>
                    </div>
                    <div className="settings-col">
                      <Link to="/error" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <FaTwitterSquare />
                          </div>
                          <div id="settings-title">Twitter</div>
                        </div>
                      </Link>
                    </div>
                    <div className="settings-col">
                      <Link to="/error" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <GrFacebook />
                          </div>
                          <div id="settings-title">Facebook</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="settings-row">
                    <div className="settings-col">
                      <Link to="/error" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <MdWidgets />
                          </div>
                          <div id="settings-title">Widgets</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="general-settings-container">
                <div className="channel-settings">
                  <div className="settings-title">General Settings</div>
                  <hr />
                  <div className="settings-row">
                    <div className="settings-col">
                      <Link to="/error" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <BsHeadphones />
                          </div>
                          <div id="settings-title">Helpdesk</div>
                        </div>
                      </Link>
                    </div>
                    <div className="settings-col">
                      <Link to="/error" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <GiTicket />
                          </div>
                          <div id="settings-title">Ticket Fields</div>
                        </div>
                      </Link>
                    </div>
                    <div className="settings-col">
                      <Link to="/error" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <BsLayoutTextSidebarReverse />
                          </div>
                          <div id="settings-title">Customer Fields</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="settings-row">
                    <div className="settings-col">
                      <Link to="/agents" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <MdSupportAgent />
                          </div>
                          <div id="settings-title">Agents</div>
                        </div>
                      </Link>
                    </div>
                    <div className="settings-col">
                      <Link to="/error" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <HiUserGroup />
                          </div>
                          <div id="settings-title">Groups</div>
                        </div>
                      </Link>
                    </div>
                    <div className="settings-col">
                      <Link to="/error" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <SiSpringsecurity />
                          </div>
                          <div id="settings-title">Security</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="settings-row">
                    <div className="settings-col">
                      <Link to="/error" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <MdTimer />
                          </div>
                          <div id="settings-title">SLA Policies</div>
                        </div>
                      </Link>
                    </div>
                    <div className="settings-col">
                      <Link to="/error" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <FaBuilding />
                          </div>
                          <div id="settings-title">Business Hours</div>
                        </div>
                      </Link>
                    </div>
                    <div className="settings-col">
                      <Link to="/error" className="text-decoration-none">
                        <div className="settings-item">
                          <div id="settings-icon">
                            <BsFillTagsFill />
                          </div>
                          <div id="settings-title">Tags</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
