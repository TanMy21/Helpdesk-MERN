import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./agents.css";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import AgentsRow from "../../components/AgentsRow/AgentsRow";
import {
  createAgent,
  getAgents,
  reset,
} from "../../features/agents/agentSlice";

const Agents = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [type, setType] = useState("Agent");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((state) => state.auth);

  const { agents, isSuccess } = useSelector((state) => state.agents);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    return () => {
      // dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  useEffect(() => {
    dispatch(getAgents());
  }, [dispatch,navigate]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createAgent({ type, name, email, password }));
    setType("Agent");
    setName("");
    setEmail("");
    setPassword("");
    navigate("/agents");
  };

  return (
    <>
      <div className="agents-wrapper">
        <Sidebar />
        <div className="agents-main-container">
          <Navbar title={"Admin > "} subTitle={"Agents"} titleLink="settings" />
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
                <>
                  {typeof agents === typeof [] && (
                    <>
                      {agents.map((agent, index) => (
                        <AgentsRow
                          agentName={agent.name}
                          agentEmail={agent.email}
                          agentRole={agent.type}
                        />
                      ))}
                    </>
                  )}
                </>
              </div>
            </div>
            <div className="new-agent-form-container">
              <section className="new-agent-header">
                <h3>New Agent</h3>
              </section>
              <section className="new-agent-form">
                <form onSubmit={onSubmit}>
                  <label htmlFor="agent-type">Agent Type:</label>
                  <br />
                  <select
                    id="agent-type"
                    name="agent-type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                  >
                    <option value="Agent">Agent</option>
                    <option value="Admin">Admin</option>
                  </select>
                  <br />
                  <label htmlFor="agent-name" id="agent-form-label">
                    Full Name:
                  </label>
                  <br />
                  <input
                    type="text"
                    id="agent-text-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <br />
                  <label htmlFor="agent-name" id="agent-form-label">
                    Email:
                  </label>
                  <br />
                  <input
                    type="text"
                    id="agent-text-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <br />
                  <label htmlFor="agent-email" id="agent-form-label">
                    Password:
                  </label>
                  <br />
                  <input
                    type="password"
                    id="agent-text-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <br />
                  <hr />
                  <input
                    type="submit"
                    value="Create agent"
                    id="create-agent-btn"
                  />
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
