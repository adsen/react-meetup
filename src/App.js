
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
        <TabList className='app-tablist'>
          <Tab className='app-tab'>Hello World</Tab>
          <Tab className='app-tab'>Counter</Tab>
          <Tab className='app-tab'>Multiple Counter</Tab>
          <Tab className='app-tab'>Name Sorter</Tab>
        </TabList>

        <TabPanel className='app-tab-panel'>
          <HelloWorld/>
        </TabPanel>

        <TabPanel className='app-tab-panel'>
          <Counter/>
        </TabPanel>

        <TabPanel className='app-tab-panel'>
          <MultiCounter/>
        </TabPanel>

        <TabPanel className='app-tab-panel'>
          <SortNames/>
        </TabPanel>

      </Tabs>
    );
  }
}

export default App;