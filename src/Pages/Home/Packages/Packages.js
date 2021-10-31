import React, { useEffect, useState } from 'react';
import Package from './Package/Package';

const Packages = () => {
    const [services, setServices] = useState([])
    // const service = services.splice(0,6);
    useEffect(() => {
        fetch('https://aqueous-basin-68815.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setServices(data));
    })

    return (
        <div id="packages" className="container">
            <h2 className="text-secondary mt-5">Our Special Packages</h2>
            <br />
            <div className="row">
                {   
                    services.map(service =><Package
                        key={service.name}
                        service={service}
                    >
                    </Package>)
                }
            </div>
        </div>
    );
};

export default Packages;