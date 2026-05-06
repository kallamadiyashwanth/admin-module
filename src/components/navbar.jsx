import React, {useState} from "react";
import '../styles/navbar.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const { currentUser } = useSelector((state) => state.user);
    const isAdmin = useSelector((state) => state.user.isAdmin);
    
    let userRole;

    if (isAdmin) {
        userRole = "Admin";
    } 
    else if(currentUser) {
        userRole = "User";
    }
    else {
        userRole = "Guest";
    }

    const handleLogout = () => {
        const confirmLogout = window.confirm("You are going to be logged out.");

        if (confirmLogout) {
            navigate('/');
            alert("Logged out successfully!");
        }
    };

    return(
        <div className="navbar-container">
            <div className="navbar">
                <div className="logo">
                    <h1 className="logo-title" onClick={() => navigate('/dashboard')}>EduCore</h1>
                </div>
                
                <div className="search-bar">
                    <input type="text" placeholder="Search..." className="search-input" />
                    <button className="search-button"><FontAwesomeIcon icon={faSearch} /></button>
                </div>

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
                </div>

                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <p className="nav-courses" onClick={() => navigate('/courses')}>Courses</p>
                    <p className="nav-analytics" onClick={() => navigate('/analytics')}>Analytics</p>
                    <p className="nav-profile" onClick={() => navigate('/profile')}>Profile</p>
                    <p className="nav-contact" onClick={() => navigate('/contact')}>Contact</p>
                    <div className="user-role-container">
                        <p className="role-tag">Role:</p>
                        <p className="user-role">{userRole}</p>
                    </div>
                    <p className="nav-logout" onClick={handleLogout}>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;