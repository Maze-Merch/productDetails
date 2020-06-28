import React, { Component } from "react";
import ProductDetails from "./productDetails/ProductDetails";
import MainCarousel from "./carousel/MainCarousel";
import Description from "./Description";
import Thumbnails from "./Thumbnails";
import Checklist from "./Checklist";

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      reviews: [],
      results: [],
      activeResult: [],
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getProductData();
    this.getReviewData();
    this.getProductImages();
  }

  // handleChange(event) {
  //   const { value } = event.target;
  //   this.setState(() => (
  //     {
  //       value,
  //     }
  //   ));
  // }

  getProductData() {
    fetch("http://52.26.193.201:3000/products/list")
      .then((res) => res.json())
      .then((data) => this.setState({ products: data[4] }));
  }

  getReviewData() {
    fetch("http://52.26.193.201:3000/reviews/5/list")
      .then((res) => res.json())
      .then((data) => this.setState({ reviews: data.results }));
  }

  getProductImages() {
    fetch("http://52.26.193.201:3000/products/5/styles/")
      .then((res) => res.json())
      .then((data) => {
        console.log('e',data);
        this.setState({ results: data.results, activeResult: data.results[0] });
      });
  }

  // getStyles() {
  //   const { results } = this.state;
  //   const styles = [];
  //   results.map((first) => (
  //     styles.push(first.photos[0].thumbnail_url)
  //   ));
  //   return styles;
  // }
  // const productStyles = getStyles(result)

  GetProductById() {
    const { products, match } = this.state;
    // console.log(match.params.id);
    const product = products.find((item) => item.id === this.match.params.id);
    return (
      <div>
        <h1>{product.name}</h1>
      </div>
    );
  }

  render() {
    const { reviews, products, results, activeResult } = this.state;
    // console.log("products", getStyles(results));
    console.log("app activeResult", activeResult, "results", results);
    return (
      <div className="container-fluid mb-5">
        <div className="jumbotron jumbotron-fluid">
          <div className="container-fluid">
            {/* <h1 className="display-4">maze mercantile</h1> */}
            <p className="lead text-center">
              <strong>Save Up to 40% Off in the </strong>
              Summer Solstice Sale
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Thumbnails photos={activeResult.photos} />
          </div>
          <div className="col-7">
            <MainCarousel photos={activeResult.photos} />
          </div>
          <div className="col-2.5">
            <ProductDetails
              products={products}
              reviews={reviews}
              result={activeResult}
              photos={activeResult.photos}
              results={results}
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

// {/* <form> */}
// {/* <input
//   type="text"
//   value={products}
//   onChange={this.handleChange}
// /> */}
// {/* </form> */}
