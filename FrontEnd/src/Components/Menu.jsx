import React, { useContext } from 'react';
import FoodContext from '../Context/FoodContext';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Menu = () => {
  const data = useContext(FoodContext);
  console.log(data);

  return (
    <div style={{padding: '20px', fontFamily: 'Arial, sans-serif' , backgroundImage:"url('https://wallpaperaccess.com/full/3014739.jpg')", backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover' }}>
      <Navbar></Navbar>
      <h1 style={{marginTop:'60px' ,textAlign: 'center', marginBottom: '20px' }}>MENU</h1>
      <div style={{margin:'60px', display: 'flex', flexWrap: 'wrap', gap: '60px', justifyContent: 'center' }}>
        {data.map((e, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              borderRadius: '10px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              width: '200px'
            }}
            className="card"
          >
            <div style={{ width: '100%', height: '150px', overflow: 'hidden' }}>
              <img
                src={e.img}
                alt={e.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '10px', textAlign: 'center' }}>
              <div style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '5px' }}>{e.name}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '1em' }}>
                <div style={{ color: '#4CAF50', fontWeight: 'bold' }}>${e.price}</div>
                <div style={{ display: 'flex', alignItems: 'center', color: 'gray' }}>
                  {Array.from({ length: Math.floor(e.rating) }, (_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                  {e.rating % 1 !== 0 && <span>&#9734;</span>}
                </div>
              </div>
              <hr />
              <Link style={{textDecoration:"none" , color:'gray'}} onMouseEnter={(e)=>{e.target.style.color ='orange'}} onMouseLeave={(e)=>{e.target.style.color ='gray'}}  to='/review/{e.name}'>Reviews</Link>
            </div>
            

          </div>
        ))}
      </div>
      <style jsx>{`
        .card:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Menu;
