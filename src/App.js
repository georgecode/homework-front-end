import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import { MuiThemeProvider } from "@material-ui/core/styles";
//Theme is uppercase because github gives me problems if I change it
import Theme from "./components/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withTheme } from "@material-ui/core/styles";

class App extends Component {
  constructor(props) {
    super(props);
    this.theme = Theme();
  }  
  render() {
    return (
      <MuiThemeProvider theme={this.theme}>
        <CssBaseline />     
        <SearchBar />                      
      </MuiThemeProvider>
    );
  }
}

export default withTheme()(App);













