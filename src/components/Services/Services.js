import React from 'react';
import useService from '../../customHook/useService';

const Services = () => {
    const [services, setServices] = useService([]);
    
    // Services Section
    return (        
        <div className="container my-5">
            <h1 className="my-5 text-center text-uppercase">Our Popular Services</h1>
            <div className="row row-cols-1 row-cols-md-3 g-5">

                {
                services.map(service => 
                <div className="col">
                    <div className="card h-100 d-flex align-items-center border border-1 border-primary rounded-3 p-3">
                        <img src={service.img} className="card-img-top" width="50px" height="170px" alt="..." />
                        <div className="card-body text-center">
                            <h2 className="card-title">Sub: {service.name}</h2>
                            <h5 className="card-text"> {service.description}</h5>
                            <h3 className="card-text">Price: ${service.price}</h3>
                        </div>
                    </div>
                </div>)  
                }
            </div>
        </div>

        
    );
};

export default Services;