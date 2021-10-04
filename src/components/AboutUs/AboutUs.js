import React from 'react';
import about from '../../images/education.jpg';

const AboutUs = () => {
    return (
        <div className="container">
            <h1 className="text-center pt-3">ABOUT US</h1>
            <h6 className="text-center">Explore more about us</h6>

            <div className="row py-5">
                <div className="col-md-6 pt-3">
                    <h2 className="text-uppercase">Our Values And Principles</h2>
                    <p className="my-4">Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits.</p>
                    <div className="d-flex p-3 border shadow-sm">
                        <i class="fas fa-check-square pe-4 fs-1"></i>
                        <h5>Texts are donated by experienced teachers!.</h5>
                    </div>
                    <div className="d-flex p-3 my-3 border shadow-sm">
                        <i class="fas fa-check-square pe-4 fs-1"></i>
                        <h5>Class tests are taken every week!.</h5>
                    </div>
                    <div className="d-flex p-3 border shadow-sm">
                        <i class="fas fa-check-square pe-4 fs-1"></i>
                        <h5>Thematic handnotes are provided!.</h5>
                    </div>
                    <div className="d-flex p-3 my-3 border shadow-sm">
                        <i class="fas fa-check-square pe-4 fs-1"></i>
                        <h5>Extra care is taken for weaker students!.</h5>
                    </div>
                    <div className="d-flex p-3 border shadow-sm">
                        <i class="fas fa-check-square pe-4 fs-1"></i>
                        <h5>Each subject is carefully explained more than once!.</h5>
                    </div>
                    
                    </div>
                <div className="col-md-6">
                    <img src={about} alt="" height="600px" width="600px" />
                </div>
            </div>
            <div className="d-flex justify-content-center my-3">
                <i class="fas fa-map-marker-alt fs-1 p-3"></i>
                <h4 className="py-3">Location: A R Plaza,Dhaka, Bangladesh.</h4>
            </div>
        </div>
    );
};

export default AboutUs;