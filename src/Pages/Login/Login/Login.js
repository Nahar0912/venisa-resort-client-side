import React from 'react';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <div className='py-5'>
            <h2>Please Login With</h2>
            <br />
            <button onClick={signInUsingGoogle} className="btn btn-secondary mx-5">Google Sign In</button>
            <button onClick={signInUsingGithub} className="btn btn-secondary">GitHub Sign In</button>
        </div>
    );
};

export default Login;