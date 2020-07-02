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
      currentStyle: 0,
      currentProduct: 5,
    };
    this.getProductById = this.getProductById.bind(this);
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

  getProductById(id) {
    const { results } = this.state;
    results.forEach((result) => {
      if (result.style_id == id) {
        this.setState({ activeResult: result });
      }
    });
  }

  handleChange(event) {
    event.preventDefault();
    const id = event.target.getAttribute('imgkey');
    this.getProductById(id);
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
      'reviews',
      reviews,
    );
    return (
      <div className="container-fluid mb-5">
        <div className="jumbotron jumbotron-fluid">
          <div className="container-fluid" />
        </div>
        <div className="row">
          <div className="d-none d-xl-block col-xl-2" />
          <div className="col-xl-1 d-none d-xl-block">
            <Thumbnails photos={activeResult.photos} />
          </div>
          <div className="col-sm">
            <MainCarousel photos={activeResult.photos} />
          </div>
          <div className="col-xl-3">
            <ProductDetails
              handleChange={this.handleChange}
              products={products}
              reviews={reviews}
              activeResult={activeResult}
              results={results}
              styles={stylesArray}
            />
          </div>
          <div className="d-none d-xl-block col-xl-2" />
        </div>
        <div className="row">
          <div className="d-none d-xl-block col-xl-2" />
          <div className="col-sm-1" />
          <div className="col-sm mt-5">
            <Description products={products} />
          </div>
          <div className="col-sm-3 mt-5">
            <Checklist />
          </div>
          <div className="d-none d-xl-block col-xl-2" />
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
