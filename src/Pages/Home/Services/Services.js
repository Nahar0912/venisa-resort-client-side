import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    const service = services.splice(6,9);
    console.log(service);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    })
    return (
        <div id='service'>
            <h2 className="text-secondary mt-5">Our Services</h2>
            <div className="row">
               {
                   services.map(service=><Service
                        key={service.id}
                        service={service}
                   ></Service>)
               }
           </div>
        </div>
    );
};

export default Services;