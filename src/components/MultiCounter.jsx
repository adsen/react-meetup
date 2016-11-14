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
   },

  render() {
    var self = this;
    return (
      <div>
        {
          this.state.counts.map(function(count, index) {
            return (
              <Counter count={count} key={index}
                onInc={function() { self.onCountChange(index, 1) }}
                onDec={function() { self.onCountChange(index, -1) }}/>
            )
          })
        }
        <div style={{borderTop: '2px solid #ccc', padding: '10px 0px'}}>
          <button
            onClick={() => this.setState({counts: [...this.state.counts, 0]})} >
            Add Counter
          </button>
        </div>
      </div>
    );
  }
});

module.exports = Container;
