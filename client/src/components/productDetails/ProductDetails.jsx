import React from 'react';
// import './ProductDetails.css';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

const ProductDetails = ({
  reviews, products, results, styles, activeResult
}) =>
  // console.log(props.match.params.id;)
  // getStyles(productsObject) {
  //   let styles = [];
  //   productsObject.map((first) => (
  //     push(first.photos[0].thumbnail_url)
  //   ));
  //   return styles;
  // }
  // console.log("products", getStyles(results));
  // const productStyles = getStyles(result)
  (
    <div className="product">
      <h6 className="product-reviews">
        **** 4.5 Stars Read
        {` ${reviews.length} `}
        reviews
      </h6>
      <h5 className="lead text-muted">{products.category}</h5>
      <h1 className="product-name">{products.name}</h1>
      <h5 className="lead text-muted">
        $
        {products.default_price}
      </h5>
      <h5 className="text-muted">
        <strong>{'STYLE >  '}</strong>
        {activeResult.name}
      </h5>
      {styles
        && styles.map((photo, i) => (
          <div
            key={i}
            className="row d-inline-flex flex-wrap mx-auto mt-4 mb-3.5
          "
          >
            <div className="col">
              <img
                // onClick={}
                width="100res"
                height="100res"
                src={photo.thumbnail_url}
                className="rounded-circle"
                alt="white shoes"
              />
            </div>
          </div>
        ))}
      <div className="container-fluid">
        <div className="d-flex flex-row">
          <div
            className="col-8 dropdown  mt-4
           mr-auto"
          >
            <button
              className="btn btn-outline-secondary btn-lg btn-secondary btn-block text-left dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              SELECT SIZE
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
          <div
            className="col-4 dropdown  mt-4
           mr-auto"
          >
            <button
              className="btn btn-outline-secondary btn-lg btn-secondary btn-block text-left dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              1
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div
            className="col-10 mt-4
           mr-auto"
          >
            <button
              className="btn btn-outline-secondary btn-lg btn-secondary btn-block text-left"
              type="button"
              id="addToCartButton"
            >
              ADD TO BAG +
            </button>
          </div>
          <div
            className="col-2.5 mt-4
           mr-auto"
          >
            <button
              className="btn btn-outline-secondary btn-lg btn-secondary btn-block text-left"
              type="button"
              id="favoriteButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
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
export default ProductDetails;
