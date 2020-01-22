import React, { Component } from 'react';
import { render } from 'react-dom';

class CounterApp extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    console.log("increment");
    const currentVal = this.state.count;
    this.setState({
      count: currentVal + 1,
    });
  }

  decrement = () => {
    console.log("Decrement");
    const currentVal = this.state.count;
    this.setState({
      count: currentVal - 1,
    });

  }

  render() {
    return <div>
      <p>{this.state.count}</p>
      <button onClick={this.increment}>+</button>
      <button onClick={this.decrement}>-</button>
    </div>
  }
}

render(<CounterApp />, document.getElementById('root'));