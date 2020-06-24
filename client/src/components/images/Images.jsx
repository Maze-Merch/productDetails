import React from "react";

class Images extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        "https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      ],
      description: [],
    };
  }

  componentDidMount() {
    this.getProductImage();
    this.getProductDescription();
  }

  getProductImage() {
    fetch("http://52.26.193.201:3000/products/5/styles/")
      .then((res) => res.json())
      .then((data) => this.setState({ products: data.results }));
  }

  getProductDescription() {
    fetch("http://52.26.193.201:3000/products/list")
      .then((res) => res.json())
      .then((data) => this.setState({ description: data }));
  }

  render() {
    const { products, description } = this.state;
    return (
      <div>
        <img src={products[0]} alt="white shoe" />
        <h1>{description.description}</h1>
      </div>
    );
  }
}

export default Images;

// <img src={products[0].photos[0].thumbnail_url}