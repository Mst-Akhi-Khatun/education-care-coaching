import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/error1.jpg';

const NotFound = () => {
    return (
        <div className="text-center">
            <img className="bg-light w-50" src={img} alt="" />
            <br />
            <Link to="/home">
                <button className="btn btn-dark my-3">Home</button>
            </Link>
            
        </div>
    );
};

export default NotFound;