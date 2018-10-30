import React, { Component } from 'react';

class Counter extends Component {

  state = { counter: 0 };

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    const { counter } = this.state;

    if (counter === 3) {
      throw new Error('Some error!');
    }
    return <h1 onClick={this.handleClick}>{counter}</h1>;
  }
}

export default Counter;
