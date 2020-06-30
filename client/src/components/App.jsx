import React, { Component } from 'react';
import ProductDetails from './productDetails/ProductDetails';
import MainCarousel from './carousel/MainCarousel';
import Description from './Description';
import Thumbnails from './Thumbnails';
import Checklist from './Checklist';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      reviews: [],
      results: [],
      activeResult: [],
      stylesArray: [],
      currentStyle: 2,
      currentProduct: 5,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getProductData();
    this.getReviewData();
    this.getProductImages();
  }

  componentDidUpdate(prevProps, prevState) {
    const { results, activeResult } = this.state;
    if (prevState.results !== results) {
      this.getStyles(results);
    }
    // if (prevState.activeResult !== activeResult) {
    //   this.getProductImages()
    // }
  }

  getProductData() {
    const { currentProduct } = this.state;
    fetch('http://52.26.193.201:3000/products/list')
      .then((res) => res.json())
      .then((data) => this.setState({ products: data[(currentProduct - 1)] }));
  }

  getReviewData() {
    const { currentProduct } = this.state;
    fetch(`http://52.26.193.201:3000/reviews/${currentProduct}/list`)
      .then((res) => res.json())
      .then((data) => this.setState({ reviews: data.results }));
  }

  getProductImages() { // id could live in (params)
    const { currentStyle, currentProduct } = this.state;
    fetch(`http://52.26.193.201:3000/products/${currentProduct}/styles/`)
      .then((res) => res.json())
      .then((data) => {
        // console.log('z', data);
        this.setState({
          results: data.results, activeResult: data.results[currentStyle],
        }); // ${id} adust to styles with getprodbyid
      });
  }

  getStyles() {
    const { results } = this.state;
    const stylesArray = [];
    // const style_id = 0;
    results.map((firstPhoto) => {
      const styles = {
        style_id: firstPhoto.style_id,
        photos: firstPhoto.photos[0],
      };
      stylesArray.push(styles);
    });
    this.setState({ stylesArray });
  }

  GetProductById() {
    const { products, match } = this.state;
    // console.log(match.params.id);
    // change of plans: get product's index or id to change activeResult instead - no match no params -> maybe
    const product = products.find((item) => item.id === this.match.params.id);
    return (
      <div>
        <h1>{product.name}</h1>
      </div>
    );
  }

  handleChange(event) {
    // const { activeResult } = event.target.value;
    event.preventDefault();
    alert('Clicked');
    this.setState(this.getProductById);
  }

  render() {
    const {
      reviews, products, results, activeResult, stylesArray,
    } = this.state;
    // console.log("products", getStyles(results));
    console.log(
      'app activeResult',
      activeResult,
      'results',
      results,
      'styles',
      stylesArray,
    );
    return (
      <div className="container-fluid mb-5">
        <div className="jumbotron jumbotron-fluid">
          <div className="container-fluid">
            <p className="lead text-center">
              <strong>Save Up to 40% Off in the </strong>
              Summer Solstice Sale
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-1">
            <Thumbnails photos={activeResult.photos} />
          </div>
          <div className="col">
            <MainCarousel photos={activeResult.photos} />
          </div>
          <div className="col-2.5">
            <ProductDetails
              products={products}
              reviews={reviews}
              activeResult={activeResult}
              results={results}
              styles={stylesArray}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-1" />
          <div className="col-7 mt-5">
            <Description products={products} />
          </div>
          <div className="col mt-5">
            <Checklist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// onClick={this.handleChange}

// {/* <form> */}
// {/* <input
//   type="text"
//   value={products}
//   onChange={this.handleChange}
// /> */}
// {/* </form> */}
