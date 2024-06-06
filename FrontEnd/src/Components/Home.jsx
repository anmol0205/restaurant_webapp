import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import '../StyleSheets/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <div className="text-container">
          <div className="title">Harborview Grill Restaurant</div>
          <div className="subtitle">Best Quality And Tasty Food</div>
          <div className="button-container">
            <Link to='/menu' className="menu-button">MENU</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
