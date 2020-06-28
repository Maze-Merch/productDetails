import React from "react";

const Thumbnails = ({ photos }) => {
  // console.log("mc props", photos);
  return (
    <div className="flex-wrap">
      {photos &&
        photos.map((photo, i) => (
          <div key={i} className="row mt-2">
            {i < 5 ? (
              <div className="my-auto flex-wrap">
                <button type="button" className="btn-reset flex-wrap">
                  <img
                    width="100res"
                    height="100res"
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
