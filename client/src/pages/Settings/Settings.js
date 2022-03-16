import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { FaSignOutAlt } from "react-icons/fa";
// import { logout, reset } from "../../features/auth/authSlice";
import SidebarExpanded from "../../components/Sidebar/SidebarExpanded";
import SidebarSmall from "../../components/Sidebar/SidebarSmall";
import Navbar from "../../components/Navbar/navbar";
import "./settings.css";

function Settings() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sbCompact, setSbCompact] = useState(0);

  const { user } = useSelector((state) => state.auth);

  const changeWidth = () => {
    if (sbCompact === 0) {
      setSbCompact(1);
    } else {
      setSbCompact(0);
    }
    console.log(sbCompact);
  };

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
      <div className="container settings-page">
        <div className="row content-area ">
          <div className="col sidebar">
            {sbCompact ? (
              <SidebarExpanded changeWidth={changeWidth} />
            ) : (
              <SidebarSmall changeWidth={changeWidth} />
            )}
          </div>
          <div className="col main-content">
            <div className="row content-nav">
              <Navbar />
            </div>
            <div className="row content">
              <div className="page-content">
                <h1>Settings</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
