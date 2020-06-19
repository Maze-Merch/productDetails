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
          <img alt="White shoes" src="https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" />
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
