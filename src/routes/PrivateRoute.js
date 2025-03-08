// src/routes/PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <h2>Loading...</h2>;
    return user ? children : <Navigate to="/login" replace  />;
};

export default PrivateRoute;
