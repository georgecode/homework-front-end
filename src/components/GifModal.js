import React, { Component, Fragment } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Typography,
         Modal,
         Paper, } from "@material-ui/core";
import HighliteOff from "@material-ui/icons/HighlightOff";
import loading_small from '../images/loading_small.gif';         

    //background-image: linear-gradient(90deg, rgb(147, 96, 168) 25%, transparent 60%),
    //background-image: linear-gradient(90deg, rgb(66, 188, 151) 25%, transparent 60%)
const styles = theme => ({
  paper: {
    backgroundColor: "#ffffff",
    padding: 10,
    //background:"linear-gradient(90deg, rgb(66, 188, 151) 25%, transparent 60%)"
  },
  modalCon: {
    margin: "0 auto",
    width: 300,
    padding: 10,
    marginTop: 50,
    outline: "none",
    
  },
  closeButton: {
    display: "block",
    float: "right"
  },
  title:{
    fontSize:'1.2em',
    //textAlign:"center",
    fontWeight:600,
    marginTop:10,
  },
  imageCon:{
    borderRadius:"8px",
    //display:'block',
    backgroundColor:"black",
    width:250,
    //height:300,
    margin:"0 auto",
    //backgroundSize: "cover",
    //objectFit: 'cover'
    //objectFit: 'contain'
  },
  image:{
    borderRadius:"8px",
    //maxWidth:'100%', 
    //maxHeight:'100%',
    margin:'auto',
    display:'block',
    width:250,
    marginTop:30

  // objectFit: "cover",
  //display: 'block',
  //width: '100vw',
  //height: '100vh',
  },
  importDate:{
    fontSize:'0.75em',
    marginBottom:10
  },
  createdBy:{
    fontSize:'0.75em',
  },
  upLoadedBy:{
    fontSize:'0.75em',
    marginBottom:20
  },
  credits:{
    fontWeight:600
  },

  ratingCon:{
    float:"right",
    backgroundColor:"black",
    //width:30,
    borderRadius:"4px",
    paddingRight:10,
    paddingLeft:10,

    border: "1px solid #000000",
  },
  rating:{
    textAlign:"center",
    color:"white"



    //float:"right"
  }

})


class GifModal extends Component {
	constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      title:"hey O this is a title",
      bigImg: loading_small,
      by:"by someone",
      rating:"",
      username:"",
      importDate:""
    };
  } 

//.toUpperCase()

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      let title =nextProps.gifInfo.title.split('GIF')[0]
      this.setState({ 
        open: nextProps.open,
        // title: nextProps.gifInfo.title.split('GIF')[0][0],
        //Upper case title var
        title: title
              .toLowerCase()
              .split(' ')
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' '),
        bigImg: nextProps.gifInfo.getAttribute('data-big'),
        by: nextProps.gifInfo.title.split('GIF')[1].replace("by", ""),
        rating:nextProps.gifInfo.getAttribute('data-rating').toUpperCase(),
        username: nextProps.gifInfo.getAttribute('data-username'),
        importDate: nextProps.gifInfo.getAttribute('data-importDate').split(' ')[0],
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

              <div className={classes.imageCon} >
                <img className={classes.image} src={this.state.bigImg} alt="test" />
              </div>
              <Typography className={classes.title} variant="h1" id="modal-title">
                {this.state.title
                }
              </Typography>
              <Typography className={classes.importDate} variant="h6" id="modal-title" >
                {this.state.importDate}
              </Typography>

              <Typography className={classes.createdBy} variant="h6" id="modal-title" >
                Created by 
                <span className={classes.credits}>{this.state.by}</span>
                
              </Typography> 
              <div className={classes.ratingCon}>
              <Typography className={classes.rating}variant="h6" id="modal-title" >
                {this.state.rating}
              </Typography>
              </div>
              <Typography className={classes.upLoadedBy} variant="h6" id="modal-title" >
                Uploaded by 
                <span className={classes.credits}>{" "+this.state.username}</span>
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



