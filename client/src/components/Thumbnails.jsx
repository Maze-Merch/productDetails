import React from 'react';

const Thumbnails = ({
  activeResult, styles, handleChange
}) =>
  // console.log("mc props", photos);
  (
    <div className="flex-wrap container thumb">
      {styles
        && styles.map((style, i) => (
          <div
            key={style.style_id}
            className="row mt-2"
          >
            {i < 5 ? (
              <section className="img-thumbnail my-auto flex-wrap" onClick={handleChange}>
                <img
                  imgkey={style.style_id}
                  width="100res"
                  height="100res"
                  src={style.photos.thumbnail_url}
                  alt="white shoes"
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
