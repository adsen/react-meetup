import React from 'react';

export default class SortNames extends React.Component {

  state = {names: ['','','']};

  handleChange = (event, index) => {
    let names = this.state.names;
    names[index] = event.target.value;
    this.setState({names: names});
  };

  getSortedNames() {
      let nonEmptyNames = this.state.names.slice(0).filter( n => !!n);
      return nonEmptyNames.sort().join(', ');
  }

  render () {
    return (
      <div>
        {
          this.state.names.map((name, i) => <input key={i} type="text" value={name} placeholder="Name" onChange={(e) => this.handleChange(e, i)}/>)           }
        <br/><br/><div>
          Names in alphabetical order: {this.getSortedNames()}
        </div>
      </div>
    );
  }
}
