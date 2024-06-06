import React from 'react';
import Navbar from './Navbar';

const Owner = () => {
  return (
    <div style={{backgroundColor: '#f0f0f0'}}>
    <Navbar ></Navbar>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0', padding: '20px' }}>
      
      <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', maxWidth: '1200px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <img
            style={{ height: 'auto', maxWidth: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            src="https://th.bing.com/th/id/OIP.QjynegEfQVPq5kIEuX9fWQHaFj?rs=1&pid=ImgDetMain"
            alt="Owner"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            textAlign: 'center',
          }}
        >
          <div>
            <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '20px' }}>MEET OUR OWNER</h1>
            <p style={{ lineHeight: '1.6', color: '#555' }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quibusdam delectus veniam. Harum commodi eius
              eligendi cum consequatur blanditiis in doloribus porro temporibus praesentium soluta ut, aut labore odit
              reprehenderit voluptatem facere nostrum. Et iusto dolorum debitis reiciendis laboriosam omnis quasi facere
              dolore quae! Ratione, tempora alias? Nisi, numquam ducimus eveniet consequatur blanditiis aliquam sequi
              eligendi commodi. Illum nihil dolores repellat culpa, explicabo eveniet rem odio quidem.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Owner;

