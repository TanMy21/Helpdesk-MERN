import './ticket.page.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { FaSignOutAlt } from "react-icons/fa";
// import { logout, reset } from "../../features/auth/authSlice";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import ActionBar from '../../components/ActionBar/ActionBar';

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
            <div className="content d-flex align-items-center justify-content-center">
              <h1>Ticket Page</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTicket;
