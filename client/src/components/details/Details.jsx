import React from 'react';
import App from '../App';

const Details = ({ products }) => (
//   <div>
//     {products.map(({ id, ...product }) => (
//       // console.log(product)
//       <div key={id} {...product} />
//       // <div key={id} {product.category} />
//     ))}
//   </div>
  <div className="content">
    <ul className="products">
      <li>
        <div className="product">
          <div className="product-reviews">**** 4.5 Stars Read 9 reviews</div>
          <div className="product-category">Kicks</div>
          <div className="product-name">
            <a href="product.html">Heir Force Ones</a>
          </div>
          <div className="product-price">$99</div>
          <img className="product-image" src="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="white shoes" />
        </div>
      </li>
    </ul>
  </div>
);

export default Details;
