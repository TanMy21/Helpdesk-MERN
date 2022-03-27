import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { FaSignOutAlt } from "react-icons/fa";
// import { logout, reset } from "../../features/auth/authSlice";
import "./new.ticket.css";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";

const NewTicket = () => {
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
      <div className="new-ticket-wrapper">
        <Sidebar />
        <div className="new-ticket-main-container">
          <Navbar title={"New Ticket"} />
          <div className="new-ticket-main-content">
            <div className="new-ticket-content">
              <div className="new-ticket-form-container">
                <div className="new-ticket-form">
                  <form>
                    <label for="contact" id="ticket-form-label">
                      Contact <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      id="new-ticket-text-input"
                      name="ticket-contact"
                    />
                    <br />
                    <label for="subject" id="ticket-form-label">
                      Subject <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      id="new-ticket-text-input"
                      name="ticket-subject"
                    />
                    <br />
                    <label for="type" id="ticket-form-label">
                      Type <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <select id="new-ticket-select-input" name="ticket-type">
                      <option value="question">Question</option>
                      <option value="incident">Incident</option>
                      <option value="problem">Problem</option>
                      <option value="feature-request">Feature Request</option>
                      <option value="refund">Refund</option>
                    </select>
                    <br />
                    <label for="type" id="ticket-form-label">
                      Source <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <select id="new-ticket-select-input" name="ticket-source">
                      <option value="phone">Phone</option>
                      <option value="forum">Forum</option>
                      <option value="source-email">Email</option>
                      <option value="social-media">Social Media</option>
                    </select>
                    <br />
                    <label for="type" id="ticket-form-label">
                      Stauts <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <select id="new-ticket-select-input" name="ticket-status">
                      <option value="open">Open</option>
                      <option value="Pending">Pending</option>
                      <option value="resolved">Resolved</option>
                      <option value="closed">Closed</option>
                      <option value="waiting-for-customer">
                        Waiting for customer
                      </option>
                    </select>
                    <br />
                    <label for="type" id="ticket-form-label">
                      Priority <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <select id="new-ticket-select-input" name="ticket-priority">
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                    <br />
                    <label for="type" id="ticket-form-label">
                      Agent <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <select id="new-ticket-select-input" name="ticket-priority">
                      <option value="agent 1">Agent 1</option>
                      <option value="agent 2">Agent 2</option>
                      <option value="agent 3">Agent 3</option>
                      <option value="agent 4">Agent 4</option>
                    </select>
                    <br />
                    <br />
                    <label for="description">
                      Description <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <textarea
                      id="ticket-form-description"
                      name="description"
                      rows="6"
                      cols="141"
                    />
                    <br />
                    <label for="contact" id="ticket-form-label">
                      Tags <span id="required-input-star">*</span>
                    </label>
                    <br />
                    <input
                      type="text"
                      id="new-ticket-text-input"
                      name="ticket-contact"
                    />
                    <hr />
                    <div className="frm-btn-container">
                      <input type="submit" value="Cancel" id="cancel-btn"/>
                      <input type="submit" value="Create" id="new-ticket-btn"/>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTicket;
