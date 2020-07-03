import React from 'react';

const Thumbnails = ({ activeResult }) => (
  <div className="flex-wrap container">
    {activeResult
      && activeResult.map((photo, i) => (
        <div
          key={photo.url}
          className="row mt-2"
        >
          {i < 7 ? (
            <section className="img-thumbnail my-auto flex-wrap">
              <img
                width="100res"
                height="100res"
                src={photo.thumbnail_url}
                alt="white shoes"
                href="#mainCarousel"
                data-slide-to={i}
              />
            </section>
          ) : (
            null
          )}
        </div>
      ))}
  </div>
);

export default Thumbnails;
