import React from 'react';

const Description = ({ products }) => (
  <div className="product">
    <h3 className="h3">{products.slogan}</h3>
    <h4 className="lead text-muted">{products.description}</h4>
  </div>
);

export default Description;
