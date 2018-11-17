import React, { Component } from 'react';
//import loading from '../images/loading.gif';
import loading_small from '../images/loading_small.gif';
import getGifs from './getGifs'
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";


// let testStructure ={images:{downsized_medium:{url:loading}}}
// console.log(testStructure.images.downsized_medium.url)
const styles = theme => ({
	gifConTestMui:{color:"blue"}
})

class GifCon extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	//****Dont forget to change this if you change image option
    	images:[{id:"12345678910",images:{fixed_height_small:{url:loading_small}}}],
    	testImage: loading_small,
    }
  }

   componentDidMount() {
   	//single gif
    // getGifs("batman").then(value => {
    // 	//console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#", value[0])
    //   this.setState({
    //   	//testImage:value[0].images.downsized_medium.url
    //   });
    // });

    getGifs(this.props.searchQuery).then(value => {
    	//console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#", value)
    	console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#", value[0].id)
      this.setState({
      	images:value
      });
    });

  }  

  	componentWillReceiveProps(nextProps) {
		// The If statement prevents re-render if search is the same
		if (nextProps.searchQuery !== this.props.searchQuery) {
			    getGifs(nextProps.searchQuery).then(value => {
    				console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#", value)
      				this.setState({
      					images:value
      				});
    			});
		}
	}

//response.data.data[0].images.downsized_medium.url
  render() {
  	//console.log("this.props.searchQuery", this.props.searchQuery)
  	const { classes } = this.props
  	//console.log("this.state.images", this.state.images)
  	//<img src={this.state.testImage} alt="test" />
    return (
      <div>
    	
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
          	//fixed_height_small
          	//fixed_width
          	//fixed_width_small
          	//original
          	//preview
           	<img key={el.id}src={el.images.fixed_height_small.url} alt="test" />
            )
          })}
      </div>
    );
  }
}
// <img key={el.id}src={el.images.fixed_height_small.url} alt="test" />
//export default GifCon;
export default withStyles(styles)(GifCon);





