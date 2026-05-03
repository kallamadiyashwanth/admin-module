import '../styles/login-page.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest, setCurrentUser, setIsAdmin, logoutUser } from "../redux/actions/userActions";

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);

    useEffect(() => {
        if (!users.length) {
            dispatch(fetchUsersRequest());
        }
    }, [dispatch, users.length]);

    const handleLogin = () => {

        if(username.toLowerCase() === 'admin' && password === 'admin324') {
            dispatch(setIsAdmin(true));
            navigate('/dashboard');
            alert("Logged in as Admin!");
            return;
        }

        const loggedInUser = users.find(
            user => user.username === username.toLowerCase() && user.password === password
        );

        if (!loggedInUser) {
            alert("Invalid username or password");
        } else {
            dispatch(setCurrentUser(loggedInUser));
            dispatch(setIsAdmin(false));

            navigate('/dashboard');
        }
    };


    const forgotPassword = () => {
        const email = prompt("Please enter your email address to receive the password reset link:");
        if (email)
            alert("Password reset link has been sent to your email!");
        else
            alert("Email address is required to reset password.");
    }

    const signUp = () => {
        alert("Sign up functionality is currently unavailable. Please contact support for assistance.");
    }

    return (
        <>
            <div className="page-container">
                <p className='welcome-tag'>Welcome to EduCore Tutors</p>
                {/* <p className='desc-tag'>Empowering your Learning Journey</p> */}
                <p className='instruction-tag'>Kindly login to access your personalized dashboard and explore our courses</p>
                <div className="login-container">
                    <FontAwesomeIcon icon={faUser} className="user-icon" />
                    <h1 className="title">User Login</h1>

                    {/* {loading && <p>Loading users...</p>}
                    {error && <p>Error: {error}</p>} */}

                    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                        <label>Username</label>
                        <input className="text-input" type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <label>Password</label>
                        <div className="password-field">
                            <input className="text-input" type={showPassword ? "text" : "password"} placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="eye-icon" onClick={() => setShowPassword(!showPassword)} />
                        </div>
                        <button type="submit" className="login-btn">
                            LOGIN
                        </button>
                        <label className="guest-login" onClick={() => { dispatch(logoutUser()); navigate('/dashboard') }}>Login as Guest</label>
                        <div className="links">
                            <label onClick={forgotPassword}>Forgot Password?</label>
                            <label onClick={signUp}>Don't have an account?</label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;