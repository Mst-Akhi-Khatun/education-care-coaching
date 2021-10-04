import React from 'react';
import useService from '../../customHook/useService';
import FewServices from '../FewServices/FewServices';
import HomeBannar from '../HomeBannar/HomeBannar';


const Home = () => {
    const [services, setServices] = useService([]);
    return (
        <div>            
            <HomeBannar></HomeBannar>
            <div className="container my-5">
                <h1 className="my-5 text-center text-uppercase">Our Courses</h1>
            <div className="row row-cols-1 row-cols-md-4 g-3">
                {
                    services.slice(0, services.length - 5).map(service => <FewServices 
                        key={service.id} 
                        service={service}
                        ></FewServices>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;