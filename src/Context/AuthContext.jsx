import React, { createContext, useState, useEffect } from 'react';

// Create context
export const AuthContext = createContext();

// Create AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is in localStorage when the app loads
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));//covert data into object
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData)); // Save user in localStorage
    setUser(userData); // Update context state
  };

  const logout = () => {
    localStorage.removeItem('user'); // Remove user from localStorage
    setUser(null); // Update context state to null (user logged out)
    navigate('/login'); // Redirect to login page after logout
  };
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
