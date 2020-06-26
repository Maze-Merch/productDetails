import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

const ProductDetails = ({ reviews, products, result, photos, results }) => {
  // console.log(props.match.params.id;)
  // console.log("products", result)
  return (
    <div className="product">
      <h6 className="product-reviews">
        **** 4.5 Stars Read
        {reviews.length}
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
        {result.name}
      </h5>
      {photos &&
        photos.map((photo, i) => (
          <div key={i} className="row d-inline-flex flex-wrap mx-auto">
            {i < results.length ? (
              <div className="col">
                <img
                  width="100res"
                  height="100res"
                  src={photo.thumbnail_url}
                  className="rounded-circle"
                  alt="white shoes"
                />
              </div>
            ) : null}
          </div>
        ))}
      <div className="row mt-4" />
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
