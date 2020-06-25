import React, { Component } from 'react';
import Button from './button/button';
import Details from './details/Details';
import Images from './images/Images';
import MainCarousel from './carousel/MainCarousel';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      reviews: [],
    };

    // this.handleChange = this.handleChange.bind(this);
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
        {/* <h1 className="container">Product Overview</h1> */}
        {/* <Details products={products} reviews={reviews} /> */}
        <Details />
        {/* <MainCarousel /> */}
        {/* <Images /> */}
        {/* <Button /> */}
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
