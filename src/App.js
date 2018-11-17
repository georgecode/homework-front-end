import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header';
import GifCon from './components/GifCon';
import loading from './images/loading.gif';

import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Theme from "./components/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withTheme } from "@material-ui/core/styles";

const styles = theme => ({
  //testMui:{color:"red"}
})

class App extends Component {
  constructor(props) {
    super(props);
    //####################################
    this.theme = Theme();
    console.log("theme", this.theme);
    // this.state = {
      
    // }
  }  
  render() {
    return (
      <MuiThemeProvider theme={this.theme}>
      <CssBaseline />
    

        <Header />
        <GifCon />        
    
      </MuiThemeProvider>
    );
  }
}

//export default App;
//export default withStyles(styles)(App)
export default withTheme()(App);













