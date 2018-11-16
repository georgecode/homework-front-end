import React, { Component } from 'react';
import loading from '../images/loading.gif';
import loading_small from '../images/loading_small.gif';
//import GetgifsTest from './GetgifsTest';
import GetGifs from './GetGifs'


let testStructure ={images:{downsized_medium:{url:loading}}}
console.log(testStructure.images.downsized_medium.url)

class GifCon extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	//Be sure to switch this image option
    	images:[{images:{fixed_height_small:{url:loading_small}}}],
      testImage: loading_small
    }
  }

   componentDidMount() {
    GetGifs("loading").then(value => {
    	//console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#", value[0])
      this.setState({
      	//testImage:value[0].images.downsized_medium.url
      });
    });

    GetGifs("loading").then(value => {
    	console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#", value)
      this.setState({
      	images:value
      });
    });

  }  

//response.data.data[0].images.downsized_medium.url
  render() {
  	console.log("image value", this.state.images)
  	//GetGifs("serch xyzzz")
//   <img src={this.state.testImage} alt="test" />
    return (
      <div>
    	<img src={this.state.testImage} alt="test" />
        <h1> Gif cotain</h1>
               {this.state.images.map(el=>{
          return (
          	//##image options
          	//downsized_medium
          	//fixed_height
          	//fixed_height_small
          	//fixed_width
          	//fixed_width_small
          	//original
          	//preview
            //console.log("URL'S###",el.images.downsized_medium.url)
            <img src={el.images.fixed_height_small.url} alt="test" />
        
          	
         
            )
          })}
      </div>
    );
  }
}
//<img src={el.image.downsized_medium.url} alt="test" />
export default GifCon;





