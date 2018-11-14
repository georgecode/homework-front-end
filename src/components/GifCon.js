import React, { Component } from 'react';
import loading from '../images/loading.gif';
//import GetgifsTest from './GetgifsTest';
import GetGifs from './GetGifs'

class GifCon extends Component {
	constructor(props) {
    super(props);
    this.state = {
      images:[loading,loading,loading],
      testImage: loading
    }
  }

   componentDidMount() {
    GetGifs("serch xyzzz").then(value => {
    	//console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#", value)
      this.setState({
      	testImage:value
      });
    });

  }  

  render() {

  	//GetGifs("serch xyzzz")

    return (
      <div>
      <img src={this.state.testImage} alt="test" />
        <h1> Gif cotain</h1>
               {this.state.images.map(el=>{
          return (
            <img src={el} alt="test" />
         
            )
          })}
      </div>
    );
  }
}

export default GifCon;