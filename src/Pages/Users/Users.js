import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-basin-68815.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    // DELETE AN USER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://aqueous-basin-68815.herokuapp.com/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = users.filter(user => user._id !== id);
                        setUsers(remainingUsers);
                    }
                });
        }
    }

    return (
        <div>
            <Link to={`/users/add`}><button type="button" className="btn btn-info">Add User</button></Link>
            <br />
            <h2>Users Available: {users.length} </h2>
            <h3>Users list</h3>
            <ul>
                {
                    users.map(user => <li
                        key={user._id}
                    >{user.name} :: {user.email}
                        <Link to={`/users/update/${user._id}`}><button type="button" className="btn btn-secondary">Update</button></Link>
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => handleDeleteUser(user._id)}></button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;