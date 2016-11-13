var React = require('react');

var SortNames = React.createClass({

  getInitialState: function() {
    return {names: ['','','']};
  },

  handleChange: function(event, index) {
    let names = this.state.names;
    names[index] = event.target.value;
    this.setState({names: names});
  },

  getSortedNames: function() {
      let nonEmptyNames = this.state.names.slice(0).filter(function(n) { return !!n; });
      return nonEmptyNames.sort().join(', ');
  },

  render: function() {
    return (
      <div>
        {
          this.state.names.map(function(name, i){
            return <input key={i} type="text" value={name} placeholder="Name" onChange={(e) => this.handleChange(e, i)}/>;
          })
        }
        <br/><br/><div>
          Names in alphabetical order: {this.getSortedNames()}
        </div>
      </div>
    );
  }
});

module.exports = SortNames;
