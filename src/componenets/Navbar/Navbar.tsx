import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsAuth(true);
    }
  }, []);

  return (
    <nav>
      <h1>Django React Auth</h1>
      <ul>
        {!isAuth && (
          <div>      
            <Link to="/">Home</Link> 
           <Link to="login">About</Link>
        </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
