import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext'; // Import AuthContext

const Adminpg1 = () => {
  const { isLoggedIn, role } = useContext(AuthContext); // Destructure values

  return (
    <div>
      {isLoggedIn && role === 'Admin' ? ( // Check for both authentication and role
        <div>Admin Content</div>
      ) : (
        <div>You are not authorized to view this page.</div>
      )}
    </div>
  );
};

export default Adminpg1;
