import React from "react";

const Thumbnails = ({ photos }) => {
  console.log('mc props', photos);
  return (
    <div>
      {photos
      && photos.map((photo, i) => (
        <div key={i} className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={photo.thumbnail_url}
              alt="white shoes"
            />
          </div>
        </div>
      ))}
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
};

export default Thumbnails;
