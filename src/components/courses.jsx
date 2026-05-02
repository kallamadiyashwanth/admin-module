import React from "react";
import '../styles/courses.css';
import Navbar from "./navbar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import vuejs from '../media/vuejs.png';
import angular from '../media/angular.png';
import react from '../media/reactjs.png';
import javascript from '../media/javascript.png';
import css from '../media/css.png';
import html from '../media/html.png';


const Courses = () => {

    const courses = [
        { image: html, title: "HTML", description: "Learn the foundation of web development by structuring web pages using HTML elements, forms, and semantic tags.", isFree: true, enrol:false },
        { image: css, title: "CSS", description: "Master the art of styling web pages with CSS, including layout techniques, animations, and responsive design.", isFree: true, enrol:false },
        { image: javascript, title: "JavaScript", description: "Dive into the world of JavaScript and learn how to create dynamic and interactive web applications.", isFree: true, enrol:false },
        { image: react, title: "React", description: "Build modern user interfaces with React, a popular JavaScript library for creating reusable UI components.", isFree: false, enrol:true },
        { image: vuejs, title: "Vue JS", description: "Explore the flexibility and power of Vue.js, a progressive JavaScript framework for building user interfaces.", isFree: false, enrol:true },
        { image: angular, title: "Angular", description: "Learn the fundamentals of Angular, a comprehensive framework for building scalable web applications.", isFree: false, enrol:true }
    ];

    return(
        <>
            <Navbar />
            {/* <h1 className="courses-title">Courses Page</h1> */}
            <div className="courses-container">
                {courses.map((course, index) => (
                    <div className="course-card" key={index}>
                        <img src={course.image} alt={course.title} className="course-image" />
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
        </>
    )
}

export default Courses;