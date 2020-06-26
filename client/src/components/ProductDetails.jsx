import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';

const ProductDetails = ({ reviews, products }) => {
  // console.log(props.match.params.id;)
  console.log("products", reviews);
  return (
    <div className="product">
      <div className="product-reviews">
        **** 4.5 Stars Read
        {' '}
        {reviews.length}
        {' '}
        reviews
      </div>
      <h4 className="product-category">{products.category}</h4>
      <h2 className="product-name">
        {/* <Link to={`/product/${products.id}`}>{products.name}</Link> */}
      </h2>
      <h4 className="product-price">
        $
        {products.default_price}
      </h4>
    </div>
  );
};

export default ProductDetails;
