import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import HomeScreen from '../Screens/HomeScreen';
import ProductScreen from '../Screens/ProductScreen';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      reviews: [],
    };
  }

  componentDidMount() {
    this.getProductData();
    this.getReviewData();
  }

  getProductData() {
    fetch('http://52.26.193.201:3000/products/list')
      .then((res) => res.json())
      .then((data) => this.setState({ products: data }));
  }

  getReviewData() {
    fetch('http://52.26.193.201:3000/reviews/1/list')
      .then((res) => res.json())
      .then((data) => this.setState({ reviews: data.results }));
  }

  render() {
    const { reviews, products } = this.state;

    return (
      <BrowserRouter>
        <div className="content">
          <Route path="/products/:id" component={ProductScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
          <ul className="products">
            {products.map((product) => (
              <li key={product.id}>
                <div className="product">
                  <div className="product-reviews">
                    **** 4.5 Stars Read {reviews.length} reviews
                  </div>
                  <div className="product-category">{product.category}</div>
                  <div className="product-name">
                    <a href="product.html">{product.name}</a>
                  </div>
                  <div className="product-price">${product.default_price}</div>
                  <img
                    className="product-image"
                    src="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                    alt={product.name}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </BrowserRouter>
    );
  }
}

const GetProductById = (props) => {
  console.log(props.match.params.id);
};

export default Details;

// const Details = ({ products }) => (
// <div>
//   {products.map(({ id, ...product }) => (
//     console.log(product)
//     <div key={id} {...product} />
//     // <div key={id} {product.category} />
//   ))}
// </div>
