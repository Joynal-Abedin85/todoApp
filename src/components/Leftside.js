import React, { useContext } from "react";
import { Accordion } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { AuthContext } from "../context/AuthContext";
import { FaExclamationCircle, FaTasks } from "react-icons/fa";
import { FaCalendarCheck, FaCalendarDay, FaPlus, FaUser } from "react-icons/fa6";

// Registering ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);


const Leftside = () => {

    const {user} = useContext(AuthContext)

    console.log(user.photoURL)
  // Pie chart data
  const data = {
    labels: ["Done", "Pending"],
    datasets: [
      {
        label: "Task Status",
        data: [70, 30], // You can change this based on your data
        backgroundColor: ["#4caf50", "#f44336"],
        borderColor: ["#4caf50", "#f44336"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="sidebar p-3"
        style={{ width: "200px", backgroundColor: "green", height: "100vh", color: "white" }}
      >
        {/* Profile Section */}
        <div className="text-center mb-3">
          <img
            src={user.photoURL}
            alt="Profile Photo"
            className="rounded-circle mb-2"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <h5>{user.displayName}</h5>
        </div>

        {/* Task Options */}
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Task Options</Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                <li>
                  <a href="#" style={{ textDecoration: "none", color: "white" }}>
                    <FaTasks className="me-2" />
                    All Tasks
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none", color: "white" }}>
                    <FaCalendarDay className="me-2" />
                    Today
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none", color: "white" }}>
                    <FaCalendarCheck className="me-2" />
                    Planned
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none", color: "white" }}>
                    <FaExclamationCircle className="me-2" />
                    Important
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none", color: "white" }}>
                    <FaUser className="me-2" />
                    Assigned to Me
                  </a>
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "none", color: "white" }}>
                    <FaPlus className="me-2" />
                    Add Task
                  </a>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* Pie Chart Section */}
        <div className="mt-3">
          <Pie data={data} />
        </div>
      </div>

      {/* Main Content */}
      
    </div>
  );
};

export default Leftside;
