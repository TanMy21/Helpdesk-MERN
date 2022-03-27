import './ticket.page.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { FaSignOutAlt } from "react-icons/fa";
// import { logout, reset } from "../../features/auth/authSlice";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import ActionBar from '../../components/ActionBar/ActionBar';
import {BsTelephone} from 'react-icons/bs'

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
          <ActionBar />
          <div className="main-content">
            <div className="ticket-content">
              <div className='ticket-details-container'>
                <div className='ticket-details-status'></div>
                <div className='ticket-details'>
                  <div className='ticket-header'>
                    <div className='ticket-header-icon'><BsTelephone id="ticket-header-icon"/></div>
                    <div className='ticket-header-subject-created-at'>
                      <div className='ticket-header-subject'>TICKET HEADER SUBJECT</div>
                      <div className='ticket-header-created-at'>CREATED AT</div>
                    </div>
                  </div>
                  <div className='ticket-content-container'>
                  <div className='ticket-header-icon'><BsTelephone id="ticket-header-icon"/></div>
                    <div className='ticket-header-subject-created-at'>
                      <div className='ticket-header-subject'>TICKET HEADER SUBJECT</div>
                      <div className='ticket-header-created-at'>CREATED AT</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='update-ticket-container'></div>
              <div className='contact-details-container'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTicket;
