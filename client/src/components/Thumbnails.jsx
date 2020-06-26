import React from "react";

const Thumbnails = ({ photos }) => {
  console.log("mc props", photos);
  return (
    <div>
      {photos &&
        photos.map((photo, i) => (
          <div key={i} className="product-detail-img">
            {i < 5 ? (
              <div className="product-detail-img">
                <button type="button" className="btn-reset product-detail-button" aria-current="true">
                  <img
                    // width="100"
                    // height="100"
                    src={photo.thumbnail_url}
                    alt="white shoes"
                  />
                </button>
              </div>
            ) : (
              null
            )}
          </div>
        ))}
    </div>
  );
};

export default Thumbnails;
