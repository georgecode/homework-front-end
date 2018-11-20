import React, { Component } from 'react';
//import Header from './components/Header';
import SearchBar from './components/SearchBar';
//import GifCon from './components/GifCon';
//import loading from './images/loading.gif';
import MosaicStyle from './components/MosaicStyle';
//import Gallery from './components/Gallery';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Theme from "./components/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withTheme } from "@material-ui/core/styles";

// const styles = theme => ({
//   //testMui:{color:"red"}
// })

class App extends Component {
  constructor(props) {
    super(props);
    this.theme = Theme();
    //console.log("theme", this.theme);
    // this.state = {}
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
//<MosaicStyle />

//<SearchBar />
//export default App;
//export default withStyles(styles)(App)
export default withTheme()(App);













