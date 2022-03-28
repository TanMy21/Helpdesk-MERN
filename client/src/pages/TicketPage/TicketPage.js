import "./ticket.page.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { FaSignOutAlt } from "react-icons/fa";
// import { logout, reset } from "../../features/auth/authSlice";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import ActionBar from "../../components/ActionBar/ActionBar";
import { BsTelephone } from "react-icons/bs";

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
      <div className="wrapper">
        <Sidebar />
        <div className="main-container">
          <Navbar title={"All Tickets > 2"} />
          <ActionBar>
            <div className="ticket-page-actionbar-btns-container"></div>
          </ActionBar>
          <div className="main-content">
            <div className="ticket-content">
              <div className="ticket-details-container">
                <div className="ticket-details-status"></div>
                <div className="ticket-details">
                  <div className="ticket-header">
                    <div className="ticket-header-icon">
                      <BsTelephone id="ticket-header-icon" />
                    </div>
                    <div className="ticket-header-subject-created-at">
                      <div className="ticket-header-subject">
                        TICKET HEADER SUBJECT
                      </div>
                      <div className="ticket-header-created-at">CREATED AT</div>
                    </div>
                  </div>
                  <div className="ticket-content-container">
                    <div className="ticket-content-header-container">
                      <div className="ticket-content-user-img"></div>
                      <div className="ticket-content-header">
                        <div className="ticket-content-username">
                          <div className="ticket-username">User Name</div>
                          <div className="reported-via">reported via</div>
                        </div>
                        <div className="ticket-content-created-at">
                          CREATED AT DATE TIME
                        </div>
                      </div>
                    </div>
                    <div className="ticket-content-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis sagittis massa vel lacus finibus accumsan nec eget
                        nulla. Morbi a commodo libero, ac consectetur tellus.
                        Integer tincidunt nibh sed mi scelerisque, eu porttitor
                        lectus vestibulum. Nulla facilisi. Etiam ut porttitor
                        leo. Nulla ornare nisl sapien, et faucibus nisi molestie
                        quis. Maecenas suscipit ac elit vel finibus. Aliquam
                        varius et est vitae tristique. Mauris non erat mauris.
                        Nullam condimentum luctus auctor. Vivamus accumsan
                        tellus vel mattis bibendum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="update-ticket-container">
                <div className="update-form-title">UPDATE TICKET</div>
                <div className="update-form">
                  <form>
                    <label for="update-form-tags">Tags</label>
                    <br />
                    <input
                      type="text"
                      id="update-form-tags-input"
                      name="update-tags"
                    />
                    <br />
                    <label for="update-type" id="update-select-label">
                      Type
                    </label>
                    <br />
                    <select
                      id="update-type"
                      name="update-type"
                      className="update-form-select"
                    >
                      <option value="question">Question</option>
                      <option value="incident">Incident</option>
                      <option value="problem">Problem</option>
                      <option value="refund">Refund</option>
                    </select>
                    <br />
                    <label for="update-status" id="update-select-label">
                      Status
                    </label>
                    <br />
                    <select
                      id="update-status"
                      name="update-stauts"
                      className="update-form-select"
                    >
                      <option value="open">Open</option>
                      <option value="resolved">Resolved</option>
                      <option value="pending">Pending</option>
                      <option value="closed">Closed</option>
                    </select>
                    <br />
                    <label for="update-priority" id="update-select-label">
                      Priority
                    </label>
                    <br />
                    <select
                      id="update-priority"
                      name="update-priority"
                      className="update-form-select"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                    <br />
                    <label for="update-agent" id="update-select-label">
                      Agent
                    </label>
                    <select
                      id="update-agent"
                      name="update-agent"
                      className="update-form-select"
                    >
                      <option value="agent 1">Agent 1</option>
                      <option value="agent 2">Agent 2</option>
                      <option value="agent 3">Agent 3</option>
                      <option value="agent 4">Agent 4</option>
                    </select>
                    <br />
                    <br />
                    <hr />
                    <input type="submit" value="UPDATE" id="update-form-btn" />
                  </form>
                </div>
              </div>
              <div className="contact-details-container">
                <div className="contact-details">
                  <div className="contact-details-header">CONTACT DETAILS</div>
                  <div className="contact-details-content">
                    <div className="ticket-user-img-name">
                      <div className="ticket-user-img"></div>
                      <div className="ticket-user-name">User name</div>
                    </div>
                    <div className="ticket-user-email">
                      <div className="ticket-user-email-label">Email</div>
                      <div className="ticket-user-email-text">
                        username@email.com
                      </div>
                    </div>
                    <div className="ticket-user-phone">
                      <div className="ticket-user-phone-label">Phone</div>
                      <div className="ticket-user-phone-text">
                        +xx xxxx xxx xxx
                      </div>
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

export default NewTicket;
