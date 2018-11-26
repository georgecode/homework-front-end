import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
//import Masonry from 'react-masonry-component';
//import SearchBar from './SearchBar';
import Gallery from "./Gallery";
// const styles = theme => ({
// 	// testMui:{color:"red"},
// 	// testTheme:{color:theme.palette.myGreen}
// })

class MosaicStyle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //const { classes } = this.props;
    // console.log("This Props #####$$$$$$####$$$$",classes)
    return (
      <div>
        <h1> xxxxMosaicStyle!!</h1>
        <Gallery />
      </div>
    );
  }
}
//<img src="https://media3.giphy.com/media/xUA7bgONYM1FrC7Vra/200w.gif" />
//export default withStyles(styles)(MosaicStyle);
export default MosaicStyle;

//<SearchBar />
