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


const styles = theme => ({
	gifConTestMui:{color:"red"}
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
    //childElements

    this.childElements = this.childElements.bind(this);
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
		//console.log("handleGifModalOpen####################",this.state)
		//console.log("handleGifModalOpen event", event.target)
		this.setState({
      		open:true,
      		gifInfo:event.target
      	});
	}

  childElements(ximages){
    return ximages[0]
    // ximages.map(function(el){
    //   return("hello")
    //    // return (

    //    //      <li key={`li_${el.id}`}className="image-element-class">
    //    //          <img 
    //    //          src={el.images.fixed_width.url} 
    //    //          key={el.id} 
    //    //          //onClick={childClick} 
    //    //          alt="test"
    //    //          title={el.title}
    //    //          data-big={el.images.original.url}
    //    //          />
    //    //      </li>
    //    //  );
    // });
  }




  render() {
  	//console.log("this.props.searchQuery", this.props.searchQuery)
  	const { classes } = this.props
    
    ///////Original////////////////////////////////////////
    const childElements = this.state.images.map(function(el,handleGifModalOpen){
        console.log("handleGifModalOpenxxxxxxxxx",handleGifModalOpen)
       return (

            <li key={`li_${el.id}`}className="image-element-class">
                <img 
                src={el.images.fixed_width.url} 
                key={el.id} 
                //onClick={childClick} 
                alt="test"
                title={el.title}
                data-big={el.images.original.url}
                />
            </li>
        );
    });
     ///////Original/////////////////////////////////////////////
     const childElements2 = function(images,openModal){
        console.log("images in child2",images)
        console.log("open modal in child2",openModal)
        return(
            images.map(function(el){
              //console.log("handleGifModalOpenxxxxxxxxx",handleGifModalOpen)
             return (

                  <li key={`li_${el.id}`}className="image-element-class">
                      <img 
                      src={el.images.fixed_width.url} 
                      key={el.id} 
                      onClick={openModal} 
                      alt="test"
                      title={el.title}
                      data-big={el.images.original.url}
                      />
                  </li>
              )
          })
         )   
     }

    //let giCon

    //console.log("this.handleGifModalOpen",this.handleGifModalOpen)

    return (

      <div>
    	<GifModal gifInfo={this.state.gifInfo} open={this.state.open}/>
    	<Paper>
        <h1 className={classes.gifConTestMui}> Gif cotain</h1>
        </Paper>
        {
          ///////////////////////////////////////
        }

            

            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}

            >

            {//console.log("this inside Masonary",this.handleGifModalOpen)
             }


                {
                  childElements2(this.state.images,this.handleGifModalOpen)
                 // let x ="hello"
                  //childElements
                  //console.log("this state child img location",this.state.images)
                  
                  //console.log("this state child img location",this.handleGifModalOpen)

                //  this.state.images.map(function(el){
                //   console.log("this inside map of images",this)

                //    return (


                //         <li key={`li_${el.id}`} className="image-element-class">

                //             <img 
                //             src={el.images.fixed_width.url} 
                //             key={el.id} 
                //             //onClick={this.handleGifModalOpen}
                //             alt="test"
                //             title={el.title}
                //             data-big={el.images.original.url}
                //             />
                //         </li>
                //     )
                // })




                }

            </Masonry>







        {
          ///////////////////////////////////////
        }


          <h1>HELLLLLOOOOO</h1>
         
      </div>
    );
  }
}
//<GifModal gifInfo={this.state.gifInfo} open={this.state.open}/>
////{childElements}
//  <Gallery />
// <img key={el.id}src={el.images.fixed_height_small.url} alt="test" />
//export default GifCon;
export default withStyles(styles)(GifCon);





