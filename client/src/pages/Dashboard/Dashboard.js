import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSignOutAlt } from "react-icons/fa";
import { logout, reset } from "../../features/auth/authSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Dashboard</p>
      </section>
      <button className="btn" onClick={onLogout}>
        <FaSignOutAlt /> Logout
      </button>
    </>
  );
}

export default Dashboard;
