import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


import HelloWorld from './components/HelloWorld';
import SortNames from './components/SortNames';
import Counter from './components/Counter';
import MultiCounter from './components/MultiCounter';

import './App.css';


class App extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Hello World</Tab>
          <Tab>Counter</Tab>
          <Tab>Multiple Counter</Tab>
          <Tab>Name Sorter</Tab>
        </TabList>

        <TabPanel>
          <HelloWorld/>
        </TabPanel>

        <TabPanel>
          <Counter/>
        </TabPanel>

        <TabPanel>
          <MultiCounter/>
        </TabPanel>

        <TabPanel>
          <SortNames/>
        </TabPanel>

      </Tabs>
    );
  }
}

export default App;
