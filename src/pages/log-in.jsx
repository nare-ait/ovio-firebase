import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = ({ onLogin }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    if (isLoggedIn === 'true') {
      navigate('/'); 
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (username === 'nare' && password === 'nare201013') { 
      localStorage.setItem('loggedIn', 'true');
      onLogin();
      navigate('/'); 
    } else {
      alert('Incorrect credentials!'); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Log in</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Username:</label>
            <input
              type="text"
              ref={usernameRef}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password:</label>
            <input
              type="password"
              ref={passwordRef}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
