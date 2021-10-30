import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, member, booking, price, img } = service;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 c-cart my-3">
            <Card>
                <Card.Body>
                    <div className="text-center">
                        <img src={img} alt="" width='80%' height='300px'/>
                    </div>
                    <Card.Title className="text-center"><h2>{name}</h2></Card.Title>
                    <Card.Text>
                        <h4>Member: {member}</h4>
                    </Card.Text>
                    <div>
                        <h3>Price: {price} $</h3>
                    </div>
                    <div className='fw-bold'>Deadline: {booking}</div>
                    <Link to={`/booking/${id}`}>
                        <button className="btn btn-secondary">Book Now</button>
                    </Link>
                </Card.Body>
                <Card.Footer className="text-muted">{id} days ago</Card.Footer>               
            </Card>
        </div>
    );
};

export default Service;