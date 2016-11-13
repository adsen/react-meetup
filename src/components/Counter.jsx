var React = require('react');

var Counter = React.createClass({
  getInitialState: function() {
    return {count: 0};
  },

  render: function() {
    return (
      <div>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.onInc}>+</button>
        <button onClick={this.onDec}>-</button>
      </div>
    );
  },
  onInc: function () { this.setState({count: this.state.count + 1}) },
  onDec: function () { this.setState({count: this.state.count - 1}) }
});

module.exports = Counter;
