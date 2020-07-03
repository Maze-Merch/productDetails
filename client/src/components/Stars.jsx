import React from 'react';

const Stars = ({ reviews, starPercentage, averageRating }) => {
  const widthStyle = {
    width: `${starPercentage}%`,
  };
  return (
    <div className="starsParent">
      <h6 className="mb-0 lead">
        {(averageRating).toFixed(1)}
        {' '}
        Stars
      </h6>
      <div className="stars-outer">
        <div className="stars-inner" style={widthStyle} />
      </div>
      <span className="number-rating" />
    </div>
  );
};

export default Stars;
