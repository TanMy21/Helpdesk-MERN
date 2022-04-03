import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./dashboard.css";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/Card/Card";
import Graph from "../../components/Graph/Graph";
import ActionBar from '../../components/ActionBar/ActionBar';


function Dashboard() {
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



  return (
    <>
      <div className="db-wrapper">
        <Sidebar className="db-sidebar" />
        <div className="db-main-container">
          <Navbar title={"Dashboard"} titleLink="dashboard"/>
          <ActionBar />
          <div className="db-main-content">
            <div className="content">
              <div className="cards-container">
                <Card title={"Unresolved"} value={25} />
                <Card title={"Overdue"} value={25} />
                <Card title={"Due Today"} value={25} />
                <Card title={"Open"} value={25} />
                <Card title={"On Hold"} value={25} />
              </div>
              <div className="graph-container">
                <Graph />
              </div>
              <div className="traffic-performance-container">
                <div className="traffic-analysis"></div>
                <div className="performance"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
