import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react'; // Import useContext
import { AuthContext } from './AuthContext'; // Import AuthContext

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isLoggedIn, role } = useContext(AuthContext); // Destructure values

  // Redirect to login if not authenticated
  if (!isLoggedIn) {
    return <Navigate to="/Login" replace={true} />;
  }

  // Redirect if role is not allowed
  if (allowedRoles && !allowedRoles.includes(role)) {
    // Consider handling unauthorized access more gracefully here
    // For example, you could display a warning message instead of redirecting.
    return <Navigate to="/unauthorized" replace={true} />;
  }

  return <Outlet />; // Render protected content
};

export default ProtectedRoute;
