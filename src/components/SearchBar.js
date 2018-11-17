//import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import GifCon from './GifCon';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});




class SearchBar extends Component {
    constructor(props) {
    super(props);
    this.state={}

    //this.searchChange = this.searchChange.bind(this);
    //this.searchIconClick = this.searchIconClick.bind(this);
  } 

      searchChange(event) {
        console.log("EVENT $%^&*$%^&*$%^&*",event.target.value)
    // const eventValue = event.target.value;
    // const eventName = event.target.name;
    // this.setState(function(prevState, props) {
    //   return {
    //     order: Object.assign({}, prevState.order, {
    //       [eventName]: eventValue
    //     })
    //   };
    // });
  }

  searchIconClick(event){
    if(event.target.value!=""){
      console.log("search icon was clicked ")
    }
  }


    render() {
    const { classes } = this.props;
    
    return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Material-UI
          </Typography>
          <div className={classes.grow} />
          <div 
          className={classes.search}
          onClick={this.searchIconClick}
          >

            <div className={classes.searchIcon}>
              <SearchIcon
              
               />
            </div>
            <InputBase
              placeholder="Search…"
              //
              onChange={this.searchChange}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <GifCon />
    </div>
    );//END return
  }// END RENDER
}// END SearchBar extends Component

// SearchBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(SearchBar);