import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

const ProductDetails = ({ reviews, products }) => {
  // console.log(props.match.params.id;)
  console.log("products", reviews);
  return (
    <div className="product">
      <h6 className="product-reviews">
        **** 4.5 Stars Read
        {' '}
        {reviews.length}
        {' '}
        reviews
      </h6>
      <h5 className="lead">{products.category}</h5>
      <h1 className="product-name">{products.name}</h1>
      <h5 className="lead">
        $
        {products.default_price}
      </h5>
    </div>
  );
};

export default ProductDetails;
