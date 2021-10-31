import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;

        const newUser = { name, email };

        fetch('https://aqueous-basin-68815.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the user.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Please Add an User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} placeholder="Your Name" />
                <input type="email" name="" id="" ref={emailRef} placeholder="Your Email"/>
                <input type="submit" value="Add" />
            </form>
            <br />
            <Link to={`/users`}><button type="button" className="btn btn-info">All User</button></Link>
        </div>
    );
};

export default AddUser;