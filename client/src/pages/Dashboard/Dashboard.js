import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./dashboard.css";
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/Navbar/navbar";
import Card from "../../components/Card/Card";
import Graph from "../../components/Graph/Graph";
import ActionBar from "../../components/ActionBar/ActionBar";
import TrafficPieChart from "../../components/PieChart/TrafficPieChart";
import { getTicketsInfo } from "../../features/tickets/ticketSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { ticketsInfo, isSuccess } = useSelector((state) => state.tickets);

  const [ticketsData, setTicketsData] = useState();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  useEffect(() => {
    dispatch(getTicketsInfo());
  }, [dispatch]);

  const ticketsStatus = ticketsInfo?.ticketsDataStatus;
  const ticketsSource = ticketsInfo?.ticketsDataSource;

  return (
    <>
      <div className="db-wrapper">
        <Sidebar className="db-sidebar" />
        <div className="db-main-container">
          <Navbar title={"Dashboard"} titleLink="dashboard" />
          <ActionBar />
          <div className="db-main-content">
            <div className="content">
              <div className="cards-container">
                <Card title={"Unresolved"} value={ticketsStatus?.[0].Pending} />
                <Card title={"Overdue"} value={"NA"} />
                <Card title={"Closed"} value={ticketsStatus?.[0].Closed} />
                <Card title={"Open"} value={ticketsStatus?.[0].Open} />
                <Card title={"Resolved"} value={ticketsStatus?.[0].Resolved} />
              </div>
              <div className="graph-container">
                <Graph />
              </div>
              <div className="traffic-performance-container">
                <div className="traffic-analysis">
                  <section className="traffic-analysis-header">
                    Traffic Analysis
                  </section>
                  <div className="pie-chart-container">
                    <TrafficPieChart source={ticketsSource}/>
                  </div>
                </div>
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
