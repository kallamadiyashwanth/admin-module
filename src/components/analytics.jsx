import React from "react";
import '../styles/analytics.css';
import Navbar from "./navbar";

const Analytics = () => {

    const analyticsData = [
        { title: "Total registered Users", value: "1,234" },
        { title: "Active Users", value: "567" },
        { title: "Total Courses", value: "6" },
        { title: "Enrolled Users", value: "756" },
        { title: "Course Completion Rate", value: "78%" }
    ]

    return(
        <>
        <Navbar />
        <div className="analytics-container">
            
            {/* <h1 className="analytics-title">Analytics Page</h1> */}
            <div className="analytics-cards">
                {analyticsData.map((data, index) => (
                    <div className="card" key={index}>
                        <h2>{data.title}</h2>
                        <p className="card-value">{data.value}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Analytics;