import React from "react";
import '../styles/analytics.css';
import Navbar from "./navbar";
import PieChart from "./piechart";

const Analytics = () => {

    const analyticsData = [
        { title: "Total registered Users", value: "1,234" },
        { title: "Active Users", value: "567" },
        { title: "Total Courses", value: "6" },
        { title: "Enrolled Users", value: "756" },
        { title: "Course Completions", value: "432" }
    ]

    return(
        <>
        <Navbar />
        <div className="analytics-container">
            <div className="analytics-top">
                <PieChart />
            </div>
            {/* <h1 className="analytics-title">Analytics Page</h1> */}
            <div className="analytics-cards">
                {analyticsData.map((data, index) => (
                    <div className="card" key={index}>
                        <h3>{data.title}</h3>
                        <p className="card-value">{data.value}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Analytics;