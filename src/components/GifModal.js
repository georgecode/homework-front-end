import React, { Component, Fragment } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Typography,
         Modal,
         Paper, } from "@material-ui/core";
import HighliteOff from "@material-ui/icons/HighlightOff";
import loading_small from '../images/loading_small.gif';         


const styles = theme => ({
  paper: {
    backgroundColor: "#ffffff",
    padding: 10
  },
  modalCon: {
    margin: "0 auto",
    width: 600,
    padding: 10,
    marginTop: 50,
    outline: "none"
  },
  closeButton: {
    display: "block",
    float: "right"
  },
  title:{
    color:"red",
    fontSize:'2em'
  },
  imageCon:{
    //display:'block',
    backgroundColor:"black",
    width:500,
    height:300,
    margin:"0 auto",
    //backgroundSize: "cover",
    //objectFit: 'cover'
    //objectFit: 'contain'
  },
  image:{
    maxWidth:'100%', 
    maxHeight:'100%',
    margin:'auto',
    display:'block'

  // objectFit: "cover",
  //display: 'block',
  //width: '100vw',
  //height: '100vh',
  }

})


class GifModal extends Component {
	constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      title:"hey O this is a title",
      bigImg: loading_small,
      by:"by someone"

    };
  } 



  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ 
        open: nextProps.open,
        title: nextProps.gifInfo.title.split('GIF')[0].toUpperCase(),
        bigImg: nextProps.gifInfo.getAttribute('data-big'),
        by: nextProps.gifInfo.title.split('GIF')[1].replace("by", "By: ")

      });
    }
  }

  handleGifModalClose = () => {
    this.setState({ open: false });
  };

  render() {
  	const { classes } = this.props;
    return (
      <Fragment>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onBackdropClick={this.handleGifModalClose}
        >
          <div className={classes.modalCon}>
            <Paper className={classes.paper}>
              <HighliteOff
                className={classes.closeButton}
                onClick={this.handleGifModalClose}
              />
              <Typography className={classes.title} variant="h1" id="modal-title">
                {this.state.title
                }
              </Typography>
              <div className={classes.imageCon} >
                <img className={classes.image} src={this.state.bigImg} alt="test" />
              </div>
              <Typography variant="h6" id="modal-title" >
                {this.state.by}
              </Typography>
              

            </Paper>
          </div>
        </Modal>
      </Fragment>

    );
  }
}

export default withStyles(styles)(GifModal);
//style={{background: `url(${this.state.bigImg})`}}

//style={{backgroundImage: `url(${loading_small})`}}

//<img className={classes.image} src={this.state.bigImg} alt="test" />
//export default Header;
//<img src={this.props.gifInfo.id} alt="test" />



