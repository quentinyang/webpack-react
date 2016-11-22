import AutoComplete from '../modules/autocomplete/autocomplete';
import LazyLoad from '../modules/lazyload/lazyload';

import Box from '../modules/container/box';
import ListView from '../modules/list/list';

import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React!!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AutoComplete/>
        <hr/>
        <LazyLoad/>
        <hr/>
        <Box>
          <ListView/>
        </Box>
      </div>
    );
  }
}