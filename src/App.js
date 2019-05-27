import React, { Component } from 'react';
import './App.css';
import CurrencyConverter from './Components/CurrencyConverter'

class App extends Component {
  render() {
    return (
      <>
        <h2>Higher Order Component</h2>
        <CurrencyConverter/>
      </>
    );
  }
}

export default App;
