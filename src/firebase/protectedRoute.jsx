// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = !!localStorage.getItem('authToken'); // Check for token

    return isLoggedIn ? children : <Navigate to={`${import.meta.env.BASE_URL}firebase/login`} replace />;
};

export default ProtectedRoute;
