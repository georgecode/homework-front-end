import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header'
import GifCon from './components/GifCon'
import loading from './images/loading.gif'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images:[loading,loading,loading]
    }
  }  
  render() {
    return (
      <div> 
        <Header />
        <GifCon />        
      </div>
    );
  }
}

export default App;













