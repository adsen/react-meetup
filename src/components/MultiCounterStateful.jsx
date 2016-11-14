var React = require('react');

var Counter = React.createClass({
  getInitialState: function() {
    return {value: 0};
  },

  render: function() {
    return (
      <div>
        <h3>Count: {this.state.value}</h3>
        <button onClick={this.onInc}>+</button>
        <button onClick={this.onDec}>-</button>
      </div>
    );
  },
  onInc: function () { this.setState({value: this.state.value + 1}) },
  onDec: function () { this.setState({value: this.state.value - 1}) }
});

var MultiCounterStateful = React.createClass({
  getInitialState: function() {
    return {counters: 0};
  },

  onAddCounter: function(index, val) {
    var counters = this.state.counters;
    this.setState({counters: counters+1});
   },

  render: function() {
    var counterElems = [];
    for (var i = 0; i<this.state.counters; i++) {
      counterElems.push(<Counter key={i}/>);
    }
    return <div>
      {counterElems}
      <div style={{borderTop: '2px solid #ccc'}}>
        <button
          onClick={this.onAddCounter} >
          Add Counter
        </button>
      </div>
    </div>;
  }
});

module.exports = MultiCounterStateful;
