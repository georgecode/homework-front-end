
//react-masonry-component was used for the mosaic
import React, { Component } from 'react';
//import loading from '../images/loading.gif';
import loading_small from '../images/loading_small.gif';
//git wants the g in the path ./GetGifs Uppercase,  React wants the named import lowercase 
//so the paths file will be upper case and the named import will be lowercase
import getGifs from './GetGifs'
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import GifModal from './GifModal';
import Gallery from "./Gallery";
import Masonry from 'react-masonry-component';
import Grid from "@material-ui/core/Grid";


const styles = theme => ({
	//gifConTestMui:{color:"red"},
  masonryCon:{
    border: "5px solid #ff0000",
    margin:"0 auto",
    //textAlign:"center"
  },
  gifCon:{
    //margin:"0 auto"
    //margin:20
    //borderRadius:"20px"
    //paddingTop:90,
    //backgroundColor:"red"
  },
  gif:{
    //border: "5px solid #ff0000",
    borderRadius:"8px",
    // "&:hover":{
    //   border: "2px solid #ff0000",
    // },
    // width:150
  }
  // belowGif:{
    
  //   marginTop:-30,
  //   height:30,
  //   //backgroundColor:"red",
  //   //color:"blue"
  // }

})

const masonryOptions = {
    transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class GifCon extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	//****Dont forget to change this if you change image option
    	images:[{id:"12345678910",
    		title:"title GIF title",

	    	images:{
	    		fixed_width:{
	    			url:loading_small
	    			},
	    		original:{
	    			url:loading_small
	    			}	
	    	}
    	}],

    	testImage: loading_small,
    	open:false,
    	gifInfo:""

    }
    this.handleGifModalOpen = this.handleGifModalOpen.bind(this);
  }

   componentDidMount() {
    getGifs(this.props.searchQuery).then(value => {
    	//console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#", value)
    	//console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#", value[0])
      this.setState({
      	images:value
      });
    });

  }  

  	componentWillReceiveProps(nextProps) {
		// The If statement prevents re-render if search is the same
		if (nextProps.searchQuery !== this.props.searchQuery) {
			    getGifs(nextProps.searchQuery).then(value => {
    				//console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#", value)
      				this.setState({
      					images:value
      				});
    			});
		}
	}
  //Opens and closes gifModal
	handleGifModalOpen(event){
		//console.log("handleGifModalOpen event", event.target)
		this.setState({
      		open:true,
      		gifInfo:event.target
      	});
	}

  render() {
  	//console.log("this.props.searchQuery", this.props.searchQuery)
  	const { classes } = this.props


    //transitionDuration: 0,
    const masonryOptions={
                          fitWidth: true,
                          //columnWidth: 300
                          //isFitWidth:true
                          }

    const childElements = function(images,openModal){
        //fixed_width is 200p
        console.log("images in child2",images[0].images)
        return(
            images.map(function(el){
             return (
                  <Paper key={`paper${el.id}`} className={classes.gifCon}>
                  
                      <img 
                      className={classes.gif}
                      src={el.images.fixed_width.url} 
                      key={el.id} 
                      onClick={openModal} 
                      alt="test"
                      title={el.title}
                      data-big={el.images.original.url}
                      />
            
                  </Paper>
              )
          })
         )   
     }

    return (
////////////////////////////////////////////react-masonry-component
      <div>
    	 <GifModal gifInfo={this.state.gifInfo} open={this.state.open}/>



       <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <h1>Left</h1>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1>Right</h1>
          </Grid>
       </Grid>



    	 <Paper>
          <h1 className={classes.gifConTestMui}> Gif cotain</h1>
      </Paper>
      {console.log("masonryOptions@@@@@@@@@@@@",masonryOptions)}

            <Masonry
              //Masonry API
              //https://www.npmjs.com/package/react-masonry-component
                //className={'my-gallery-class'} // default ''
                className={classes.masonryCon}
                elementType={'div'} // default 'div'
                //options={masonryOptions} // default {} isFitWidth   fitWidth: true
                options={masonryOptions} // default {} isFitWidth
               //options: PropTypes.object,
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements(this.state.images,this.handleGifModalOpen)}
            </Masonry>
      </div>
    );
  }
}
//<div key={`div_${el.id}`} className={classes.gifCon}>
//className="image-element-class"
//<li key={`li_${el.id}`}className="image-element-class">
//<GifModal gifInfo={this.state.gifInfo} open={this.state.open}/>
//  <Gallery />
//export default GifCon;
export default withStyles(styles)(GifCon);





