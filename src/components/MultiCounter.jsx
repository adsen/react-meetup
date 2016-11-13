import React from 'react';

class Counter extends React.Component {
  render () {
    return (
      <div>
        <h3>Count: {this.props.count}</h3>
        <button onClick={this.props.onInc}>+</button>
        <button onClick={this.props.onDec}>-</button>
      </div>
    );
  }
}

export default class Container extends React.Component {
  state = {counts: []};
  onCountChange(index, val) {
    let counts = this.state.counts;
    counts[index] += val;
    this.setState({counts});
   };

  render() {
    return <div>
      {this.state.counts.map((count, index) =>
      <Counter count={count} key={index}
        onInc={() => this.onCountChange(index, 1)}
        onDec={() => this.onCountChange(index, -1)}/> )}
      <button
        onClick={() => this.setState({counts: [...this.state.counts, 0]})} >
        Add Counter
      </button>
    </div>;
  }
}
