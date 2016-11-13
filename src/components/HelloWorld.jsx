var React = require('react');

var HelloWorld = React.createClass({
  getInitialState: function() {
    return {name: ''};
  },

  handleChange: function(event) {
    this.setState({name: event.target.value});
  },

  render: function() {
    return (
      <div>
        <h3>Hello{this.state.name ? ' '+this.state.name : ''}, Welcome to React!</h3>
        <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleChange} />
      </div>
    );
  }
});

module.exports = HelloWorld;
