import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Modal, Paper } from "@material-ui/core";
import HighliteOff from "@material-ui/icons/HighlightOff";
import loading_small from "../images/loading_small.gif";
//import { browserHistory } from 'react-router'

const styles = theme => ({
  modal: {
    //allows modal to scroll
    overflowY: "scroll"
  },
  paper: {
    backgroundColor: "#ffffff",
    padding: 10
  },

  modalCon: {
    margin: "0 auto",
    width: 300,
    padding: 10,
    marginTop: 50,
    outline: "none",
    "@media (min-width: 600px)": {
      width: 550
    },
    "@media (min-width: 1400px)": {
      width: 800
    }
  },

  closeButton: {
    display: "block",
    float: "right",
    "@media (min-width: 1400px)": {
      fontSize: "2.5em"
    }
  },

  title: {
    fontSize: "1.2em",
    fontWeight: 600,
    marginTop: 10,
    "@media (min-width: 600px)": {
      fontSize: "1.5em",
      marginLeft: 55
    },
    "@media (min-width: 1400px)": {
      fontSize: "2em"
    }
  },

  image: {
    borderRadius: "8px",
    margin: "auto",
    display: "block",
    width: 250,
    marginTop: 30,
    "@media (min-width: 600px)": {
      width: 400
    },
    "@media (min-width: 1400px)": {
      width: 600
    }
  },

  importDate: {
    fontSize: "0.75em",
    marginBottom: 10,
    "@media (min-width: 600px)": {
      fontSize: "1em",
      marginLeft: 55
    },
    "@media (min-width: 1400px)": {
      fontSize: "1.5em",
      marginBottom: 20
    }
  },

  upLoadedBy: {
    fontSize: "0.75em",
    marginBottom: 20,
    "@media (min-width: 600px)": {
      fontSize: "1em",
      marginLeft: 55
    },
    "@media (min-width: 1400px)": {
      fontSize: "1.5em"
    }
  },

  credits: {
    fontWeight: 600
  },

  ratingCon: {
    float: "right",
    backgroundColor: "black",
    borderRadius: "4px",
    paddingRight: 10,
    paddingLeft: 10,
    border: "1px solid #000000",
    "@media (min-width: 1400px)": {
      marginRight: 10
    }
  },

  rating: {
    textAlign: "center",
    color: "white",
    "@media (min-width: 1400px)": {
      fontSize: "2em"
    }
  }

});//END styles

class GifModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      title: "hey O this is a title",
      bigImg: loading_small,
      //by: "by someone",
      rating: "",
      username: "",
      importDate: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      //made this a variable so i can use .map on it
      let title = nextProps.gifInfo.title.split("GIF")[0];
      this.setState({
        open: nextProps.open,
        //Upper case title variable
        title: title
          .toLowerCase()
          .split(" ")
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" "),
        bigImg: nextProps.gifInfo.getAttribute("data-big"),
        rating: nextProps.gifInfo.getAttribute("data-rating").toUpperCase(),
        username: nextProps.gifInfo.getAttribute("data-username"),
        importDate: nextProps.gifInfo
          .getAttribute("data-import-date")
          .split(" ")[0]
      });
    }
  }
  //Closes Modal
  handleGifModalClose = () => {
    this.props.sendData(false);
    this.setState({ open: false });
    //sets history back
    history.back()
  };

  render() {
    //Closes modal when back button is hit
    window.onpopstate = ()=> {
      this.props.sendData(false);
      this.setState({ open: false });
     }

    const { classes } = this.props;
    return (
      <Fragment>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onBackdropClick={this.handleGifModalClose}
          className={classes.modal}
        >
          <div className={classes.modalCon}>
            <Paper scroll="paper" className={classes.paper}>
              <HighliteOff
                className={classes.closeButton}
                onClick={this.handleGifModalClose}
              />

              <img
                className={classes.image}
                src={this.state.bigImg}
                alt="test"
              />

              <Typography
                className={classes.title}
                variant="h1"
                id="modal-title"
              >
                {/*Removes all whit space and checks for Title less gifs*/}             
                {this.state.title.replace(/\s/g,'')===""
                ?"No Title"
                :this.state.title}

              </Typography>
              <Typography
                className={classes.importDate}
                variant="h6"
                id="modal-title"
              >
                {this.state.importDate}
              </Typography>

              <div className={classes.ratingCon}>
                <Typography
                  className={classes.rating}
                  variant="h6"
                  id="modal-title"
                >
                  {this.state.rating}
                </Typography>
              </div>
              <Typography
                className={classes.upLoadedBy}
                variant="h6"
                id="modal-title"
              >
                Uploaded by
                <span className={classes.credits}>
                  {/*Checks to make sure gif has a username*/}
                  {this.state.username === ""
                    ? " Unknown"
                    : " " + this.state.username
                  }
                </span>
              </Typography>
            </Paper>
          </div>
        </Modal>
      </Fragment>
    );
  }
}

export default withStyles(styles)(GifModal);
