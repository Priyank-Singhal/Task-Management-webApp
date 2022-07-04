
import { useAuth } from "../contexts/AuthContext"

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
      const { currentUser } = useAuth()

    return currentUser ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute