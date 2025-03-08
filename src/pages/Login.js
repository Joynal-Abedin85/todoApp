import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../firebase.init.js';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate('/');
    }, [user, navigate]);

    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <h2>Login to Access</h2>
            <button className="btn btn-primary mt-3" onClick={login}>
                Sign in with Google
            </button>
        </div>
    );
};

export default Login;
