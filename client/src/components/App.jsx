import React, { Component } from 'react';
import Button from './button';

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => (
      {
        value,
      }
    ));
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <form>
          <h1 className="container">Product Overview</h1>
          <input
            type="text"
            value={value}
            onChange={this.handleChange}
          />
          <Button />
        </form>
      </div>
    );
  }
}

export default App;
