import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; 
import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container">
      <img src="public/Green (1) 4 (1).png" alt="Image not found" />
      <div className="not-found-content">
        <h3>oh no!</h3>
        <p>We can't find the page you're looking for, but don't worry!</p>
        <p>You can still go to our recipe catalog and browse them all!</p>
        <button className="custom-button">
          Go to recipes <FaArrowRight /> 
        </button>
      </div>
    </div>
  );
};

export default NotFound;
