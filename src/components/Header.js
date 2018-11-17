import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import SearchBar from './SearchBar';

const styles = theme => ({
	testMui:{color:"red"},
	testTheme:{color:theme.palette.myGreen}
})

class Header extends Component {
	constructor(props) {
    super(props);
  } 

  render() {
  	const { classes } = this.props;
  	console.log("This Props #####$$$$$$####$$$$",classes)
    return (
      <div>
      <SearchBar />
      <Paper>
        <h1 className={classes.testMui}> Header!!</h1>
        <h1 className={classes.testTheme}> Test Theme!!</h1>
        </Paper>
      </div>

    );
  }
}

export default withStyles(styles)(Header);
//export default Header;