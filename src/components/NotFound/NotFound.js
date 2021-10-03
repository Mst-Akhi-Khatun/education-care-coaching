import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/error1.jpg';

const NotFound = () => {
    return (
        <div>
            <img className="bg-light w-50" src={img} alt="" />
            <br />
            <Link>
                <button className="btn btn-dark">Home</button>
            </Link>
            
        </div>
    );
};

export default NotFound;