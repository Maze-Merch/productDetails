import React from 'react';

const MainCarousel = ({ photos }) => (
  // console.log('mc props', photos);

  <div
    id="mainCarousel"
    className="carousel slide"
    data-ride="false"
    data-touch="true"
    data-interval="false"
  >
    <div className="carousel-inner">
      {photos
      && photos.map((photo, i) => (
        <div key={i} className={i === 0
          ? 'carousel-item active'
          : 'carousel-item'}
        >
          <img
            className="d-block w-100"
            src={photo.url}
            alt="slide"
          />
        </div>
      ))}
    </div>
    <a
      className="carousel-control-prev"
      href="#mainCarousel"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#mainCarousel"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default MainCarousel;
