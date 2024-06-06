import React, { useContext } from 'react';
import Navbar from './Navbar';
import ReviewContext from '../Context/ReviewContext';
import '../StyleSheets/Review.css'; 

const Review = () => {
  const data = useContext(ReviewContext);
  console.log(data);

  return (
    <div className="review-container">
      <Navbar></Navbar>
      <div className='review-heading'>Review</div>
      <div className='review-box'>
      {data.map((e, ind) => (
        <div key={ind} className="review-card">
          <div className="review-msg">{e.msg}</div>
          <div className="review-name">{e.name}</div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Review;
