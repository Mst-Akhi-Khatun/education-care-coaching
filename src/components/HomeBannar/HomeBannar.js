import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner2.jpg';
import './HomeBannar.css';

const HomeBannar = () => {
    // Banner component
    return (
        <div>
            <div className="row container-fluid">
                <div className="col md-6 d-flex align-items-center justify-content-center">
                    <div>
                    <h1 className="fw-bold text">
                        Present Tutors Using <span className="text-primary">Amazing</span> Elements
                    </h1>
                    <p className="my-4">
                        Education care comes with a collection of useful elements and beautiful predesigned layouts which let you showcase your tutors and other members of your staff in a captivating manner.
                    </p>
                    <Link to="/about">
                        <button className="btn btn-primary">About Us</button>
                    </Link>
                    </div>
                </div>
                <div className="col md-6">
                <img src={banner} alt="" />
                </div>
            </div>            
        </div>
    );
};

export default HomeBannar;