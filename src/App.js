import React, { Component } from 'react';
import Rapper from './Components/Rapper';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './Components/Header';
// import podcastLibrary from './server/podcasts';
// import {add} from './server/podcasts';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      podcasts: []
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Share and Discover Podcasts</h1>
        </header>
      <Rapper />
      </div>
    );
  }
}

export default App;
