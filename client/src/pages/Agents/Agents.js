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
          <Navbar
            title={"Admin > "}
            subTitle={"Agents"}
            titleLink="/settings"
          />
          <div className="agents-container">
            <div className="agents-section">
              <section className="agents-section-title">
                <h2 id="agents-section-title">Agents</h2>
              </section>
              <div className="agents-table-container">
                <div className="agents-table-header">
                  <div className="table-header-col">Name</div>
                  <div className="table-header-col">Role</div>
                  <div className="table-header-col">Last Seen</div>
                </div>
                <AgentsRow />
                <AgentsRow />
                <AgentsRow />
                <AgentsRow />
              </div>
            </div>
            <div className="new-agent-form-container">
              <section className="new-agent-header">
                <h3>New Agent</h3>
              </section>
              <section className="new-agent-form">
                <form> 
                  <label htmlFor="agent-type">Agent Type:</label>
                  <br />
                  <select id="agent-type" name="agent-type">
                    <option value="volvo">Agent</option>
                    <option value="saab">Admin</option>
                  </select>
                  <br />
                  <label htmlFor="agent-type" id="agent-form-label">Full Name:</label>
                  <br />
                  <input type="text" id="agent-text-input"/>
                  <br />
                  <label htmlFor="agent-type" id="agent-form-label">Email:</label>
                  <br />
                  <input type="text" id="agent-text-input"/>
                  <br />
                  <hr />
                  <input type="submit" value="Create agent" id="create-agent-btn"/>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agents;
