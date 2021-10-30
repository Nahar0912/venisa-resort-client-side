import React from 'react';

const GalleryPic = ({service}) => {
    const { img, img2} = service;
    return (
        <div className="col-lg-4 col-sm-6 col-12 mb-5">
            <img src={img} alt="" width="250px"/>
            <img src={img2} alt="" width="250px"/>
        </div>
    );
};

export default GalleryPic;