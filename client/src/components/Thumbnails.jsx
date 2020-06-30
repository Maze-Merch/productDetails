import React from "react";

const Thumbnails = ({ photos }) => {
  // console.log("mc props", photos);
  return (
    <div className="flex-wrap">
      {photos &&
        photos.map((photo, i) => (
          <div key={i} className="row mt-2">
            {i < 5 ? (
              <div className=" img-thumbnail my-auto flex-wrap">
                <img
                  width="100res"
                  height="100res"
                  src={photo.thumbnail_url}
                  alt="white shoes"
                />
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
