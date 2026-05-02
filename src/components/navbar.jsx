import React from "react";
import '../styles/navbar.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        alert("Logged out successfully!");
        navigate('/');
    };

    return(
        <div className="navbar-container">
            <div className="navbar">
                <div className="logo">
                    <h1 className="logo-title" onClick={() => navigate('/dashboard')}>EduCore</h1>
                </div>
                <div className="nav-links">
                    <p className="nav-courses" onClick={() => navigate('/courses')}>Courses</p>
                    <p className="nav-analytics" onClick={() => navigate('/analytics')}>Analytics</p>
                    <p className="nav-profile" onClick={() => navigate('/profile')}>Profile</p>
                    <p className="nav-logout" onClick={handleLogout}>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;