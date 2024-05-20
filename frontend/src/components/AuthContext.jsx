import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');

  // Fetch user role from localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      setIsLoggedIn(true);
      try {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        setRole(decoded.role); // Assuming role is stored in the JWT payload
      } catch (error) {
        console.error('Error decoding JWT:', error);
      }
    }
  }, []);

  // const login = (role) => {
  //   setIsLoggedIn(true);
  //   setRole(role);
  // };

  // const logout = () => {
  //   setIsLoggedIn(false);
  //   setRole('');
  // };

  return (
    <AuthContext.Provider value={{ isLoggedIn, role }}>
      {children}
    </AuthContext.Provider>
  );
};
