import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { FaSignOutAlt } from "react-icons/fa";
// import { logout, reset } from "../../features/auth/authSlice";
import Navbar from "../../components/Navbar/navbar";
import "./settings.css";
import Sidebar from "../../components/Sidebar/sidebar";

function Settings() {
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
      <div className="container settings-page">
        <div className="row content-area ">
          <Sidebar />
          <div className="col main-content">
            <div className="row content-nav">
              <Navbar title={"Settings"}/>
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
