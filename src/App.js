import React, { Component } from 'react';
import './App.css';
import VerticalNavigation from './Components/vertical-navigation';
import Jumbotron from './Components/jumbotron';
import HorizontalNavigation from './Components/horizontal-navigation';
import BlogPost from './Components/blog-post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VerticalNavigation />
        <Jumbotron />
        <HorizontalNavigation />
        <div className="blog-content">
          <div className="grid-row">
            <BlogPost image="Drake"/>
            <BlogPost image="Posty"/>
            <BlogPost image="Logic"/>
            <BlogPost image="Childish" />
            <BlogPost image="Kendrick" />
            <BlogPost image="Future" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
