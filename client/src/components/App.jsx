import React, { Component } from 'react';
import Button from './button/button';
import Details from './Details';

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
    };

    // this.handleChange = this.handleChange.bind(this);
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
    fetch(' http://52.26.193.201:3000/reviews/1/list')
      .then((res) => res.json())
      .then((data) => this.setState({ reviews: data.results }));
  }

  // handleChange(event) {
  //   const { value } = event.target;
  //   this.setState(() => (
  //     {
  //       value,
  //     }
  //   ));
  // }

  render() {
    const { reviews, products } = this.state;

    return (
      <div>
        <h1 className="container">Product Overview</h1>
        <Button />
        {/* <Details products={products} reviews={reviews} /> */}
        <Details />
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
