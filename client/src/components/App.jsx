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
      products: [{
        id: 5,
        name: 'Heir Force Ones',
        slogan: 'A sneaker dynasty',
        description: 'Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I"m just a sneaker pro, I love Pumas and shell toes, but can"t nothin compare to a fresh crispy white pearl',
        category: 'Kicks',
        default_price: '99',
      }],
      reviews: [],
      results: [],
      activeResult: [],
      currentStyle: 0,
      currentProduct: 5,
      averageRating: 0,
      starPercentage: 0,
      modal: false,
      modalInfo: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    this.getProductData();
    this.getReviewData();
    this.getProductImages();
  }

  getProductData() {
    const { currentProduct } = this.state;
    fetch('http://52.26.193.201:3000/products/list')
      .then((res) => res.json())
      .then((data) => this.setState({ products: data[currentProduct - 1] }));
  }

  getReviewData() {
    const { currentProduct } = this.state;
    fetch(`http://52.26.193.201:3000/reviews/${currentProduct}/list`)
      .then((res) => res.json())
      .then((data) => this.setState({ reviews: data.results }))
      .then(() => this.averageStarRating());
  }

  getProductImages() {
    const { currentStyle, currentProduct } = this.state;
    fetch(`http://52.26.193.201:3000/products/${currentProduct}/styles/`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          results: data.results,
          activeResult: data.results[currentStyle],
        });
      });
  }

  selectModal(info = '') {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
      modalInfo: info,
    });
  }

  averageStarRating() {
    const { reviews } = this.state;
    let ratingSum = 0;
    reviews.map((review) => {
      ratingSum += review.rating;
    });
    if (ratingSum) {
      const averageRating = ratingSum / reviews.length;
      const starPercentage = (averageRating / 5) * 100;
      this.setState({
        starPercentage,
        averageRating,
      });
    }
  }

  handleChange(e, style) {
    e.preventDefault();
    this.setState({ activeResult: style });
  }

  handleKeyPress(e, style) {
    e.preventDefault();
    this.setState({ activeResult: style });
  }

  render() {
    const {
      reviews,
      products,
      results,
      activeResult,
      averageRating,
      starPercentage,
      modalInfo,
      modal,
    } = this.state;

    return (
      <div className="container-fluid mb-5">
        <div className="jumbotron jumbotron-fluid">
          <div className="container-fluid" />
        </div>
        <div className="row">
          <div className="d-none d-xl-block col-xl-2" />
          <div className="col-xl-1 d-none d-xl-block">
            <Thumbnails activeResult={activeResult.photos} />
          </div>
          <div className="col-sm">
            <MainCarousel
              photos={activeResult.photos}
              selectModal={this.selectModal}
              modal={modal}
              modalInfo={modalInfo}
            />
          </div>
          <div className="col-xl-3">
            <ProductDetails
              handleChange={this.handleChange}
              toggleStar={this.toggleStar}
              products={products}
              reviews={reviews}
              activeResult={activeResult}
              results={results}
              starPercentage={starPercentage}
              averageRating={averageRating}
              averageStarRating={this.averageStarRating}
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
        <div className="model" />
      </div>
    );
  }
}

export default App;

// <img alt="White shoes" src="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" />

// <div>
//   <a className="header-logo" href="https://cdn.discordapp.com/attachments/722563828285440133/722566216157495317/Maze_Merchantile.png" />
// </div>

// {/* <form> */}
// {/* <input
//   type="text"
//   value={products}
//   onChange={this.handleChange}
// /> */}
// {/* </form> */}
