import React from 'react';

export default class HelloWorld extends React.Component {
  state = {name: ''};
  handleChange = (event) => {
    this.setState({name: event.target.value});
  };
  render () {
    return (
      <div>
        <h3>Hello{this.state.name ? ' '+this.state.name : ''}, Welcome to React!</h3>
        <input type="text" value={this.state.name} placeholder="Name" onChange={this.handleChange} />
      </div>
    );
  }
}
