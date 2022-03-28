import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { FaSignOutAlt } from "react-icons/fa";
// import { logout, reset } from "../../features/auth/authSlice";
import "./agents.css";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import AgentsRow from "../../components/AgentsRow/AgentsRow";

const Agents = () => {
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
      <div className="agents-wrapper">
        <Sidebar />
        <div className="agents-main-container">
          <Navbar title={"Admin > Agents"} />
          <div className="agents-main-content">
            <div className="agents-container">
              <div className="agents-header">
                <div className="agents-title">Agents</div>
                <div className="new-agent-btn">New agent</div>
              </div>
              <div className="agents-table-container">
                <div className="agents-tables-sort"></div>
                <div className="agents-table">
                  <div className="agents-table-header">
                    <div>Name</div>
                    <div>Role</div>
                    <div>Last Seen</div>
                  </div>
                  <div>
                    <AgentsRow />
                    <AgentsRow />
                    <AgentsRow />
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

export default Agents;
