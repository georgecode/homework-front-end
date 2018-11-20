import React, { Component } from 'react';
//import loading from '../images/loading.gif';
import loading_small from '../images/loading_small.gif';
//git wants the g in the path ./GetGifs Uppercase,  React wants the named import lowercase 
//so the paths file will be upper case and the named import will be lowercase
import getGifs from './GetGifs'
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import GifModal from './GifModal';


const styles = theme => ({
	gifConTestMui:{color:"blue"}
})

class GifCon extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	//****Dont forget to change this if you change image option
    	images:[{id:"12345678910",
    		title:"title GIF title",

	    	images:{
	    		fixed_height_small:{
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








	handleGifModalOpen(event){
		//console.log("handleGifModalOpen")
		//console.log("handleGifModalOpen event", event.target)
		this.setState({
      		open:true,
      		gifInfo:event.target
      	});
	}

  render() {
  	//console.log("this.props.searchQuery", this.props.searchQuery)
  	const { classes } = this.props
    return (
      <div>
    	<GifModal gifInfo={this.state.gifInfo} open={this.state.open}/>
    	<Paper>
        <h1 className={classes.gifConTestMui}> Gif cotain</h1>
        </Paper>
               {this.state.images.map(el=>{
               	// console.log(el.title)
               	// console.log(el.rating)
               	// //console.log(el._score)
               	// console.log(el.username)
               	// console.log("----------------")
          return (
          	//##image options
          	//***If image options are changed here they must also be changed in state******
          	//downsized_medium
          	//fixed_height
          	//fixed_height_small //what i use
          	//fixed_width
          	//fixed_width_small
          	//original
          	//preview
           	<img
            //SUPER HACKEY
            //don't forget to change this**
           	//id={el.images.original.url} 
           	key={el.id} 
           	onClick={this.handleGifModalOpen} 
           	src={el.images.fixed_height_small.url} 
           	alt="test"
           	title={el.title}
           	data-big={el.images.original.url}
           	/>
            )
          })}
      </div>
    );
  }
}
// <img key={el.id}src={el.images.fixed_height_small.url} alt="test" />
//export default GifCon;
export default withStyles(styles)(GifCon);





