import React, { useContext } from 'react';
import '../StyleSheets/Navbar.css';
import UserContext from '../Context/UserContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { data } = useContext(UserContext);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to='/'>HOME</Link></li>
        <li className="navbar-item"><Link to='/about'>ABOUT</Link></li>
        <li className="navbar-item"><Link to='/menu'>MENU</Link></li>
        {data ? (
          <li className="navbar-item navbar-item-right"><span>{data}</span></li>
        ) : (
          <li className="navbar-item navbar-item-right"><Link to='/login'>LOGIN</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;


