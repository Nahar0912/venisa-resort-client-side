import React from 'react';
import { Card } from 'react-bootstrap';

const Package = ({S_package}) => {
    const { img, name, member, price } = S_package;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 c-cart my-3 ">
            <Card>
                <Card.Body>
                    <div className="text-center">
                        <img src={img} alt="" width='90%' height='200px'/>
                    </div>
                    <Card.Title className="text-center"><h2>{name}</h2></Card.Title>
                    <Card.Text>
                        <h4>Member: {member}</h4>
                    </Card.Text>
                    <div>
                        <h3>Price: {price} $</h3>
                    </div>
                    <h5>Contact us for booking</h5>
                    {/* <div className='fw-bold'>Deadline: {booking}</div>
                    <Link to={`/booking/${id}`}>
                        <button className="btn btn-secondary">Book Now</button>
                    </Link> */}
                </Card.Body>             
            </Card>
        </div>
    );
};

export default Package;