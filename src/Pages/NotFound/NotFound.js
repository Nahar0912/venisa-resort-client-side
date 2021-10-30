import React from 'react';
import { Link } from 'react-router-dom';
import notFound from './../../Images/notFound.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: '50%' }} src={notFound} alt="" />
            <br />
            <Link to="/"><button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;