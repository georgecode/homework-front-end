import React, { Component } from 'react';
import loading from '../images/loading.gif';
//import GetgifsTest from './GetgifsTest';
import GetGifs from './GetGifs'


let testStructure ={images:{downsized_medium:{url:loading}}}
console.log(testStructure.images.downsized_medium.url)

class GifCon extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	images:[{images:{downsized_medium:{url:loading}}}],
      testImage: loading
    }
  }

   componentDidMount() {
    GetGifs("surf").then(value => {
    	//console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#", value[0])
      this.setState({
      	testImage:value[0].images.downsized_medium.url
      });
    });

    GetGifs("surf").then(value => {
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
            //console.log("URL'S###",el.images.downsized_medium.url)
            <img src={el.images.downsized_medium.url} alt="test" />
        
          	
         
            )
          })}
      </div>
    );
  }
}
//<img src={el.image.downsized_medium.url} alt="test" />
export default GifCon;





