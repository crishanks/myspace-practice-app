import React, { Component } from 'react';
import './App.css';
import VerticalNavigation from './Components/vertical-navigation';
import Jumbotron from './Components/jumbotron';
import HorizontalNavigation from './Components/horizontal-navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VerticalNavigation />
        <Jumbotron />
        <HorizontalNavigation />
      </div>
    );
  }
}

export default App;
