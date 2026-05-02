import React, {useState} from "react";
import '../styles/navbar.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

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

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
                </div>

                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <p className="nav-courses" onClick={() => navigate('/courses')}>Courses</p>
                    <p className="nav-analytics" onClick={() => navigate('/analytics')}>Analytics</p>
                    <p className="nav-profile" onClick={() => navigate('/profile')}>Profile</p>
                    <p className="nav-contact" onClick={() => navigate('/contact')}>Contact</p>
                    <p className="nav-logout" onClick={handleLogout}>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;