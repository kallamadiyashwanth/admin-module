import React from "react";
import '../styles/profile.css';
import Navbar from "./navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);
    const isAdmin = useSelector((state) => state.user.isAdmin);

    if(!isAdmin)
        if (!currentUser) {
            return (
                <>
                <Navbar />
                <div className="no-profile-container">
                    <h2 className="no-user">Please login to view your profile</h2>
                    <p onClick={() => navigate('/')} className="user-login-link">
                        Click here to Login
                    </p>
                </div>
                </>
            );
        }

    if(isAdmin) {
        return (
            <>
            <Navbar />
            <div className="no-profile-container">
                <h2 className="admin">Admin users do not have a profile page.</h2>
            </div>
            </>
        );
    }

    return (
        <>
        <Navbar />
        <div className="profile-container">

            <div className="profile-card">
                <h1 className="profile-title">User Profile</h1>

                {/* Profile Header */}
                <div className="profile-header">
                    <img
                        src={currentUser.image} 
                        alt="profile"
                        className="profile-img"
                    />
                    <h2>{currentUser.firstName} {currentUser.lastName}</h2>
                    <p>@{currentUser.username}</p>
                </div>

                {/* Profile Details */}
                <div className="profile-grid">
                    <div><strong>Email:</strong> {currentUser.email}</div>
                    <div><strong>Phone:</strong> {currentUser.phone}</div>
                    <div><strong>Gender:</strong> {currentUser.gender}</div>
                    <div><strong>Age:</strong> {currentUser.age}</div>
                    <div><strong>Birth Date:</strong> {currentUser.birthDate}</div>
                    <div><strong>Blood Group:</strong> {currentUser.bloodGroup}</div>
                    <div><strong>Height:</strong> {currentUser.height} cm</div>
                    <div><strong>Weight:</strong> {currentUser.weight} kg</div>

                    <div className="full-width">
                        <strong>Address:</strong> {currentUser.address.address}, {currentUser.address.city}
                    </div>

                    <div className="full-width">
                        <strong>Company:</strong> {currentUser.company.name}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
    }

export default Profile;