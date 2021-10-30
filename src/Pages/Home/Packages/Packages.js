import React from 'react';
import Package from './Package/Package';

const Packages = () => {
    const packages = [
        {
            img: 'https://sayemanresort.com/wp-content/uploads/2019/10/Deluxe-Twin-hm05.jpg',
            name: '2 days Package',
            member: '2',
            price:'160'
        },
        {
            img: 'https://i.ytimg.com/vi/5Q_UrLtwjCs/maxresdefault.jpg',
            name: '4 days Package',
            member: '4',
            price:'320'
        },
        {
            img: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201912111528214161-c5596e902f2011eba0570242ac110004.jpg?&output-quality=75&downsize=910:612&crop=910:612;0,4&output-format=jpg',
            name: '5 days Package',
            member: '3',
            price:'440'
        }
    ]

    return (
        <div id="packages" className="container">
            <h2 className="text-secondary mt-5">Our Special Packages</h2>
            <br />
            <div className="row">
                {   
                    packages.map(S_package =><Package
                        key={S_package.name}
                        S_package={S_package}
                    >
                    </Package>)
                }
            </div>
        </div>
    );
};

export default Packages;