import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { FaSignOutAlt } from "react-icons/fa";
// import { logout, reset } from "../../features/auth/authSlice";
import Navbar from "../../components/Navbar/navbar";
import "./new.ticket.css";
import Sidebar from "../../components/Sidebar/sidebar";

function NewTicket() {
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
      <div className="container new-ticket-page">
        <div className="row content-area ">
          <Sidebar />
          <div className="col main-content">
            <div className="row content-nav">
              <Navbar title={"New Ticket"}/>
            </div>
            <div className="row content">
              <div className="page-content">
                <h1>New Ticket</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewTicket;
