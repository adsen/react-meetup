import React from 'react';

export default class Counter extends React.Component {
  state = {count: 0};

  render () {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.onInc}>+</button>
        <button onClick={this.onDec}>-</button>
      </div>
    );
  }
  onInc = () => this.setState({count: this.state.count + 1});
  onDec = () => this.setState({count: this.state.count - 1});
}
