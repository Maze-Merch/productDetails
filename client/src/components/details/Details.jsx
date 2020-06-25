import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from '../App';
import HomeScreen from '../Screens/HomeScreen';
import ProductScreen from '../Screens/ProductScreen';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      reviews: [],
      images: [],
    };
  }

  componentDidMount() {
    this.getProductData();
    this.getReviewData();
    this.getProductImages();
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

  getProductImages() {
    fetch('http://52.26.193.201:3000/products/5/styles/')
      .then((res) => res.json())
      .then((data) => this.setState({ images: data.results[0].photos }));
  }

  GetProductById() {
    const { products, match } = this.state;
    console.log(match.params.id);
    const product = products.find((item) => item.id === this.match.params.id);
    return (
      <div>
        <h1>{product.name}</h1>
      </div>
    );
  }

  render() {
    const { reviews, products, images } = this.state;
    // console.log(props.match.params.id;)
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
                    **** 4.5 Stars Read
                    {' '}
                    {reviews.length}
                    {' '}
                    reviews
                  </div>
                  <div className="product-category">{product.category}</div>
                  <div className="product-name">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </div>
                  <div className="product-price">
                    $
                    {product.default_price}
                  </div>
                  {/* {images.map((image) => (
                    <ul key={image.url}>
                      <Link to={`/product/${product.id}`}>
                        <img
                          className="product-image"
                          src={image.thumbnail_url}
                          alt={product.name}
                        />
                      </Link>
                    </ul>
                  ))} */}
                  <div className="product-slogan">{product.slogan}</div>
                  <div className="product-description">{product.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </BrowserRouter>
    );
  }
}

export default Details;

// const Details = ({ products }) => (
// <div>
//   {products.map(({ id, ...product }) => (
//     console.log(product)
//     <div key={id} {...product} />
//     // <div key={id} {product.category} />
//   ))}
// </div>
