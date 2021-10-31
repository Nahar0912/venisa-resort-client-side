import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import GalleryPic from './GalleryPic/GalleryPic';

const Gallery = () => {
    const [services, setGallery] = useState([])
    
    useEffect(() => {
        fetch('https://aqueous-basin-68815.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setGallery(data));
        
    })

    return (
        <div id="gallery" className="container">
            <h2 className="text-secondary mt-5">Gallery</h2>
            <br />
            <div className="row">
                {
                    services.map(service => <GalleryPic
                        key={service.name}
                        service={service}
                    >
                    </GalleryPic>)
                }
            </div>
        </div>
    );
};

export default Gallery;