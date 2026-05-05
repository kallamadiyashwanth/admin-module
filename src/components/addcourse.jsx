import React from "react";
import Navbar from "./navbar";
import { useNavigate, useLocation } from "react-router-dom";
import '../styles/addcourse.css';

const AddCourse = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { enrolOrAddCourse } = location.state || {};

    if(enrolOrAddCourse === 'enroll') {
        return (
            <>
                <Navbar />
                <div className="enroll-container">
                    <h1 className="enroll-title">Course Enrollment</h1>
                    <p className="enroll-message">You have successfully enrolled in the course!</p>
                    <button className="back-button" onClick={() => navigate('/courses')}>Back to Courses</button>
                </div>
            </>
        );
    }
    else if(enrolOrAddCourse === 'addCourse') {
        return (
            <>
                <Navbar />
                <div className="add-course-container">
                    <h1 className="add-course-title">Add New Course</h1>
                    <form className="add-course-form" onSubmit={(e) => {
                        e.preventDefault();
                        alert("Course added successfully!");
                        navigate('/courses');
                    }}>
                        <div className="form-group">
                            <label>Course Title</label>
                            <input type="text" id="courseTitle" name="courseTitle" placeholder="Enter course title" required />
                        </div>
                        <div className="form-group">
                            <label>Course Description</label>
                            <textarea id="courseDescription" name="courseDescription" placeholder="Enter course description" required></textarea>
                        </div>
                        <div className="form-group">
                            <label>Course type</label>
                            <select id="courseType" name="courseType" required>
                                <option value="">Select course type</option>
                                <option value="free">Free</option>
                                <option value="paid">Paid</option>
                            </select>
                        </div>
                        <button type="submit" className="submit-button">Add Course</button>
                    </form>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <Navbar />
                <div className="error-container">
                    <h1 className="error-title">Invalid Action</h1>
                    <p className="error-message">The action you are trying to perform is invalid. Please go back to the courses page.</p>
                    <button className="back-button" onClick={() => navigate('/courses')}>Back to Courses</button>
                </div>
            </>
        );
    }
}

export default AddCourse;