import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log('details props', this.props.products)
    // const { products } = props.products;
    return (
      <div>
        <h3>{this.props.products}</h3>
      </div>
    );
  }
};

export default Details;
