import React from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import '../styles/addcourse.css';

const AddCourse = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="add-course-container">
                <h1 className="add-course-title">Add New Course</h1>
                <form className="add-course-form" onSubmit={() => {
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

export default AddCourse;