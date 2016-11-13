var React = require('react');

var Counter = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Count: {this.props.count}</h3>
        <button onClick={this.props.onInc}>+</button>
        <button onClick={this.props.onDec}>-</button>
      </div>
    );
  }
});

var Container = React.createClass({
  getInitialState: function() {
    return {counts: []};
  },
  onCountChange: function(index, val) {
    var counts = this.state.counts;
    counts[index] += val;
    this.setState({counts: counts});
   };

  render() {
    return (
      <div>
        {
          this.state.counts.map(function(count, index) {
            return (
              <Counter count={count}
                onInc={function() { this.onCountChange(index, 1) }}
                onDec={function() { this.onCountChange(index, -1)}}/>
            )
          })
        }
        <button
          onClick={function() { this.setState({counts: [...this.state.counts, 0]})}} >
          Add Counter
        </button>
      </div>
    );
  }
});

module.exports = Container;
