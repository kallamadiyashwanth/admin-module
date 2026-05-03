import React from "react";
import '../styles/contact.css';
import Navbar from "./navbar";

const Contact = () => {

    return(
        <>
            <Navbar />
            <div className="contact-container">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-description">If you have any questions or need assistance, please feel free to reach out to us. We're here to help!</p>
                <div className="contact-info">
                    <p><strong>Email:</strong> info@educore.com</p>
                    <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p><strong>Address:</strong> 123 Education St, Learning City, LC 12345</p>
                </div>
            </div>
        </>
    )
}

export default Contact;