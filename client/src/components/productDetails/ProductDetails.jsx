import React from 'react';
import PropTypes from 'prop-types';
import Stars from '../Stars';

const ProductDetails = ({
  reviews, products, activeResult,
  handleChange, handleKeyPress, results,
  toggleStar, averageRating, starPercentage, averageStarRating
}) => (
  <div className="product">
    {reviews
      && (
      <h6 className="lead">
        <Stars
          reviews={reviews}
          starPercentage={starPercentage}
          averageRating={averageRating}
          averageStarRating={averageStarRating}
        />
        Read all
        {` ${reviews.length} `}
        reviews
      </h6>
      )}
    <h5 className="lead text-muted">{products.category}</h5>
    <h1 className="product-name">{products.name}</h1>
    {activeResult.sale_price > 0
      ? (
        <div>
          <h5 className="lead text-muted">
            <s>
              $
              {activeResult.original_price}
            </s>
          </h5>
          <h5 className="lead text-danger">
            $
            {activeResult.sale_price}
          </h5>
        </div>
      )
      : (
        <div>
          <h5 className="lead text-muted">
            $
            {activeResult.original_price}
          </h5>
        </div>
      )}
    <h5 className="text-muted">
      <strong>{'STYLE >  '}</strong>
      {activeResult.name}
    </h5>
    {results
        && results.map((style, i) => (
          <div
            key={style.style_id}
            className="row d-inline-flex flex-wrap mx-auto mt-4 mb-3.5
          "
          >
            <div
              className="col-sm"
              // onClick={(e) => handleChange(e, style)}
              // role="button"
            >
              <img
                imgkey={style.style_id}
                width="75res"
                height="75res"
                src={style.photos[0].thumbnail_url}
                className="rounded-circle"
                alt={style.name}
                role="option"
                aria-selected="false"
                tabIndex={i}
                onClick={(e) => handleChange(e, style)}
                onKeyPress={(e) => handleKeyPress(e, style)}
              />
            </div>
          </div>
        ))}
    <div className="container-fluid">
      <div className="d-flex flex-row">
        <select className="col-sm-8 mt-4
           mr-3 btn btn-outline-secondary btn-lg btn-block"
        >
          <option value="">SELECT SIZE</option>
          <option value="">XS</option>
          <option value="">S</option>
          <option value="">M</option>
          <option value="">LG</option>
          <option value="">XL</option>
          <option value="">XXL</option>
        </select>
        <select className="col-sm-3 mt-4
           ml-3 btn btn-outline-secondary btn-lg btn-block"
        >
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>
      <div className="d-flex flex-row">
        <div
          className="col-sm-10 mt-4
           mr-2 pl-0"
        >
          <button
            className="btn btn-outline-secondary btn-lg btn-block text-left"
            type="button"
            id="addToCartButton"
          >
            ADD TO BAG +
          </button>
        </div>
        <div
          className="col-sm-2.5 mt-4
           ml-2"
        >
          <button
            className="btn btn-outline-secondary btn-lg btn-block"
            onClick={toggleStar}
            type="button"
            id="favoriteButton"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              // onClick={toggleStar(this)}
              className="bi bi-star"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

ProductDetails.propTypes = {
  // handleChange: PropTypes.function.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    photos: PropTypes.array,
    sale_price: PropTypes.string,
    skus: PropTypes.shape({
      XS: PropTypes.number,
      S: PropTypes.number,
      MD: PropTypes.number,
      LG: PropTypes.number,
      XL: PropTypes.number,
      XXL: PropTypes.number,
    }),
  })).isRequired,
  // reviews: PropTypes.array.isRequired,
  // products: PropTypes.shape({
  //   category: PropTypes.string,
  //   description: PropTypes.string,
  //   slogan: PropTypes.string,
  //   name: PropTypes.string,
  // }).isRequired,
};

export default ProductDetails;
