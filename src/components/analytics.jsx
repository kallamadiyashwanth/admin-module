import React from "react";
import '../styles/analytics.css';
import Navbar from "./navbar";

const Analytics = () => {
    return(
        <div className="analytics-container">
            <Navbar />
            {/* <h1 className="analytics-title">Analytics Page</h1> */}
            <div className="analytics-cards">
                <div className="card">
                    <h2>Total registered Users</h2>
                    <p className="card-value">1,234</p>
                </div>
                <div className="card">
                    <h2>Active Users</h2>
                    <p className="card-value">567</p>
                </div>
                <div className="card">
                    <h2>Total Courses</h2>
                    <p className="card-value">6</p>
                </div>
                <div className="card">
                    <h2>Enrolled Users</h2>
                    <p className="card-value">756</p>
                </div>
                <div className="card">
                    <h2>Course Completion Rate</h2>
                    <p className="card-value">78%</p>
                </div>
            </div>
        </div>
    )
}

export default Analytics;