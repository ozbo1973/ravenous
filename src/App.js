import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
</div>
    );
  }
}

export default App;
