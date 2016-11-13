import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld';
import SortNames from './components/SortNames';
import Counter from './components/Counter';
import MultiCounterStateful from './components/MultiCounterStateful';

class App extends Component {
  render() {
    return (
      <div>
        <em>HelloWorld:</em><br/>
        <HelloWorld />
        <br/><em>SortNames:</em><br/>
        <SortNames />
        <br/><em>Counter:</em><br/>
        <Counter />
        <br/><em>MultiCounterStateful:</em><br/>
        <MultiCounterStateful />
      </div>
    );
  }
}

export default App;
