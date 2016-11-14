import React from 'react';

class Counter extends React.Component {
  state = {value: 0};

  render () {
    return (
      <div>
        <h3>Count: {this.state.value}</h3>
        <button onClick={this.onInc}>+</button>
        <button onClick={this.onDec}>-</button>
      </div>
    );
  }
  onInc = () => this.setState({value: this.state.value + 1});
  onDec = () => this.setState({value: this.state.value - 1});
}

export default class MultiCounterStateful extends React.Component {
  state = {counters: 0};
  onCountChange(index, val) {
    let counts = this.state.counts;
    counts[index] += val;
    this.setState({counts});
   };

  render() {
    let counterElems = [];
    for (let i = 0; i<this.state.counters; i++) {
      counterElems.push(<Counter key={i}/>);
    }
    return <div>
      {counterElems}
      <div style={{borderTop: '2px solid #ccc'}}>
        <button
          onClick={() => this.setState({counters: this.state.counters+1})} >
          Add Counter
        </button>
      </div>
    </div>;
  }
}
