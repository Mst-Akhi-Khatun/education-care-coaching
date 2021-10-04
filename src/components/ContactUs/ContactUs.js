import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className="container my-5">
            <h6 className="text-primary text-center">GET IN TOUCH</h6>
            <h1 className="text-center">Contact Us Now</h1>
            <div className="d-flex my-3">
                <input type="text" placeholder="Name" className="form-control me-3 py-3" />
                <input type="email" placeholder="Email" className="form-control" /> <br />
            </div>
            <div className="my-3">
                <input type="number" placeholder="Phone" className="form-control py-3 my-4" />
                <input type="text" placeholder="Subject" className="form-control py-3" /><br />
            </div>
            <textarea id="w3review" name="w3review" rows="5" cols="145" placeholder="Massage" className="p-3">

            </textarea> <br />
            <button className="btn btn-primary my-3 text-start">Send Now</button>
            <div className="text-center">
                <h1 className="my-4">Follow Us: </h1>
                <i class="fab fa-facebook me-5"></i>
                <i class="fab fa-twitter me-5"></i>
                <i class="fab fa-instagram me-5"></i>
                <i class="fab fa-youtube"></i>
            
            </div>
        </div>
    );
};

export default ContactUs;