import React from 'react';

class Images extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      description: [{
        id: 5,
        name: 'Heir Force Ones',
        slogan: 'A sneaker dynasty',
        description: 'Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I"m just a sneaker pro, I love Pumas and shell toes, but can"t nothin compare to a fresh crispy white pearl',
        category: 'Kicks',
        default_price: '99',
      }],
    };
  }

  componentDidMount() {
    this.getProductImage();
    this.getProductDescription();
  }

  getProductImage() {
    fetch('http://52.26.193.201:3000/products/5/styles/')
      .then((res) => res.json())
      .then((data) => this.setState({ products: data.results }));
  }

  getProductDescription() {
    fetch('http://52.26.193.201:3000/products/list')
      .then((res) => res.json())
      .then((data) => this.setState({ description: data }));
  }

  render() {
    const { products, description } = this.state;
    return (
      <div>
        {/* <img src={products[0].photos[0].thumbnail_url} alt="white shoes" /> */}
        <h4>{description[0].slogan}</h4>
        <p>{description[0].description}</p>
      </div>
    );
  }
}

export default Images;
