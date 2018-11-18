import React, { Component, Fragment } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Typography,
         Modal,
         Paper, } from "@material-ui/core";
import HighliteOff from "@material-ui/icons/HighlightOff";         


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

})

class GifModal extends Component {
	constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      title:"hey O this is a title"
    };
  } 

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleGifModalClose = () => {
    this.setState({ open: false });
  };

  render() {
  	const { classes } = this.props;
    console.log("GifModal this.props",this.props.gifInfo)
    console.log("GifModal this.props",this.props.gifInfo.src)
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
              <Typography variant="h6" id="modal-title">
                {this.props.gifInfo.title}
              </Typography>
              <img src={this.props.gifInfo.src} alt="test" />

            </Paper>
          </div>
        </Modal>
      </Fragment>

    );
  }
}

export default withStyles(styles)(GifModal);
//export default Header;