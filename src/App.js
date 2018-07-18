import React, { Component } from 'react';
import './App.css';

// import Component
import Header from './Components/Header';
import Table from './Components/Table';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Table/>
      </div>
    );
  }
}

export default App;
