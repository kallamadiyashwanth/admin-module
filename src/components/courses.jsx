import React from "react";
import '../styles/courses.css';
import Navbar from "./navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";

const Courses = () => {

    const courses = [
        { title: "HTML", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc.", isFree: true, enrol:false },
        { title: "CSS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc.", isFree: true, enrol:false },
        { title: "JavaScript", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc.", isFree: true, enrol:false },
        { title: "React", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc.", isFree: false, enrol:true },
        { title: "Vue JS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc.", isFree: false, enrol:true },
        { title: "Angular", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc.", isFree: false, enrol:true }
    ];

    return(
        <div>
            <Navbar />
            {/* <h1 className="courses-title">Courses Page</h1> */}
            <div className="courses-container">
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <h2 className="course-title">{course.title}</h2>
                        <p className="course-description">{course.description}</p>
                        <div className="course-details">
                            <p className="course-type">
                                {course.isFree ? 'Free' : 'Paid'} 
                                {course.isFree ? '' : <FontAwesomeIcon icon={faLock} className="course-icon" />}
                            </p>
                            {course.enrol ? <p className="enroll-button">Enroll</p> : <p className="enroll-button">Watch</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Courses;
