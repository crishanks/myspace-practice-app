import React, { Component } from 'react';
import './App.css';
import VerticalNavigation from './Components/vertical-navigation';
import Jumbotron from './Components/jumbotron';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VerticalNavigation />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
