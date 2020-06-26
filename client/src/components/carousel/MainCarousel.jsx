import React from "react";

const MainCarousel = ({ photos }) => (
  // console.log('mc props', photos);
  (
    <div
      id="mainCarousel"
      className="carousel slide"
      data-ride="carousel"
      data-touch="true"
    >
      <div className="carousel-inner">
        {photos
        && photos.map((photo, i) => (
          <div key={i}>
            {i === 0
              ? (
                <div className="carousel-item active">
                  <img
                    // width="1000"
                    // height="1000"
                    className="d-block w-100"
                    src={photo.url}
                    alt="slide"
                  />
                </div>
              ) : (
                <div className="carousel-item">
                  <img
                    // width="1000"
                    // height="1000"
                    className="d-block w-100"
                    src={photo.url}
                    alt="slide"
                  />
                </div>
              )}
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
  )
);

export default MainCarousel;
