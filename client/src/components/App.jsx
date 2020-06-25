import React, { Component } from "react";
import { Button } from "react-bootstrap";
// import Button from "./button/button";
import Details from "./details/Details";
// import Images from "./images/Images";
import MainCarousel from "./carousel/MainCarousel";
import Images from "./images/Images";

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
      .then((data) => this.setState({ results: data.results, activeResult: data.results[0] }));
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
    const { reviews, products, results, activeResult } = this.state;
console.log( activeResult, results )
    return (
      <div className="container">
        <MainCarousel photos={activeResult.photos}/>
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

        // <div className="row">
        //   <div className="col">
        //     Photos
        //   </div>
        //   <div className="col-6">
        //     <MainCarousel />
        //   </div>
        //   <div className="col">
        //     {/* <Details /> */}
        //   </div>
        // </div>
        // <div className="row">
        //   <div className="col">
        //     Empty
        //   </div>
        //   <div className="col-6">
        //     <Images />
        //   </div>
        //   <div className="col">
        //     Optional check-list
        //   </div>
        // </div>