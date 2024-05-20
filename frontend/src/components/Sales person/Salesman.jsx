import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext'; // Import AuthContext

const Salesman = () => {
  const { isLoggedIn, role } = useContext(AuthContext); // Destructure values

  return (
    <div>
      {isLoggedIn && role === 'Salesman' ? ( // Check for both authentication and role
        <div>Sales Content</div>
      ) : (
        <div>You are not authorized to view this page.</div>
      )}
    </div>
  );
};

export default Salesman;
