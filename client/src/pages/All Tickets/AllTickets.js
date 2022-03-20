import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { FaSignOutAlt } from "react-icons/fa";
// import { logout, reset } from "../../features/auth/authSlice";
import Navbar from "../../components/Navbar/navbar";
import "./all.tickets.css";
import Sidebar from "../../components/Sidebar/sidebar";

function AllTicket({ changeWidth, sbCompact }) {
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
      <div className="container all-tickets-page">
        <div className="row content-area ">
          <Sidebar />
          <div className="col main-content">
            <div className="row content-nav">
              <Navbar title={"All Tickets"}/>
            </div>
            <div className="row content">
              <div className="page-content">
                <h1>All Tickets</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllTicket;
