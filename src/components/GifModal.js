import React, { Component, Fragment } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Typography,
         Modal,
         Paper, } from "@material-ui/core";
import HighliteOff from "@material-ui/icons/HighlightOff";
import loading_small from '../images/loading_small.gif';         
    //purple
    //background-image: linear-gradient(90deg, rgb(147, 96, 168) 25%, transparent 60%),
    //green
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
    "@media (min-width: 600px)": {
      width:550
    },
    "@media (min-width: 1400px)": {
      width:800
    },
///////////////
////////
/////////
  },
  closeButton: {
    display: "block",
    float: "right",
    "@media (min-width: 1400px)": {
      fontSize:'2.5em'
    },
  },
  title:{
    fontSize:'1.2em',

    //textAlign:"center",
    fontWeight:600,
    marginTop:10,
    "@media (min-width: 600px)": {
      fontSize:'1.5em',
      marginLeft:55
    },
    "@media (min-width: 1400px)": {
      fontSize:'2em'
    },
  },
  // imageCon:{
  //   borderRadius:"8px",
  //   //display:'block',
  //   backgroundColor:"black",
  //   width:250,
  //   //height:300,
  //   margin:"0 auto",
  //   "@media (min-width: 600px)": {
  //     width:400
  //   },
  //   //backgroundSize: "cover",
  //   //objectFit: 'cover'
  //   //objectFit: 'contain'
  // },
  image:{
    borderRadius:"8px",
    //maxWidth:'100%', 
    //maxHeight:'100%',
    margin:'auto',
    display:'block',
    width:250,
    marginTop:30,
    "@media (min-width: 600px)": {
      width:400
    },
    "@media (min-width: 1400px)": {
      width:600
    },

  // objectFit: "cover",
  //display: 'block',
  //width: '100vw',
  //height: '100vh',
  },
  importDate:{
    fontSize:'0.75em',
    marginBottom:10,
    "@media (min-width: 600px)": {
      fontSize:'1em',
      marginLeft:55
    },
    "@media (min-width: 1400px)": {
      fontSize:'1.5em',
      marginBottom:20,
    },
  },
  createdBy:{
    fontSize:'0.75em',
    "@media (min-width: 600px)": {
      fontSize:'1em',
      marginLeft:55
    },
    "@media (min-width: 1400px)": {
      fontSize:'1.5em'
    },
  },
  upLoadedBy:{
    fontSize:'0.75em',
    marginBottom:20,
    "@media (min-width: 600px)": {
      fontSize:'1em',
      marginLeft:55
    },
    "@media (min-width: 1400px)": {
      fontSize:'1.5em'
    },
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
    "@media (min-width: 1400px)": {
      marginRight:10
    },

  },
  rating:{
    textAlign:"center",
    color:"white",
    "@media (min-width: 1400px)": {
      fontSize:'2em'
    },


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
      importDate:"",
      //userPic:""
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
        importDate: nextProps.gifInfo.getAttribute('data-import-date').split(' ')[0],
        //userPic:nextProps.gifInfo.getAttribute('data-user-pic')
      });
    }
  }

  handleGifModalClose = () => {
    this.setState({ open: false });
  };

 //  demoMethod(){
 //   this.props.sendData(value);
 // }

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

             
                <img className={classes.image} src={this.state.bigImg} alt="test" />
            
              <Typography className={classes.title} variant="h1" id="modal-title">
                {this.state.title
                }
              </Typography>
              <Typography className={classes.importDate} variant="h6" id="modal-title" >
                {this.state.importDate}
              </Typography>

              <Typography className={classes.createdBy} variant="h6" id="modal-title" >
                Created by 
                <span className={classes.credits}>{this.state.by===""?" Unknown":this.state.by}</span>
                
              </Typography> 
              <div className={classes.ratingCon}>
              <Typography className={classes.rating}variant="h6" id="modal-title" >
                {this.state.rating}
              </Typography>
              </div>
              <Typography className={classes.upLoadedBy} variant="h6" id="modal-title" >
                Uploaded by 
                <span className={classes.credits}>{this.state.username===""?" Unknown":" "+this.state.username}</span>
              </Typography>

            </Paper>
          </div>
        </Modal>
      </Fragment>

    );
  }
}
// <div className={classes.imageCon} >
export default withStyles(styles)(GifModal);
//style={{background: `url(${this.state.bigImg})`}}

//style={{backgroundImage: `url(${loading_small})`}}

//<img className={classes.image} src={this.state.bigImg} alt="test" />
//export default Header;
//<img src={this.props.gifInfo.id} alt="test" />



