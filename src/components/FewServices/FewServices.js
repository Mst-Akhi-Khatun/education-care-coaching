import React from 'react';

const FewServices = (props) => {
    const {name, description, img, price} = props.service;
    return (
        <div className="col">
            <div className="card h-100 d-flex align-items-center border border-1 border-primary rounded-3 p-3">
                <img src={img} className="card-img-top" width="50px" height="170px" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h6 className="card-text">{description}</h6>
                    <h4 className="card-text">Price: ${price}</h4>
                </div>
            </div>
        </div>
    );
};

export default FewServices;