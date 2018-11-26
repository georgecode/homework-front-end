//import * as React from 'react';
import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import loading_small from '../images/loading_small.gif';
import getGifs from './GetGifs';
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import GifModal from './GifModal';


const styles = theme => ({
    gifConTestMui:{color:"red"}
})
 
const masonryOptions = {
    transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }
 
class Gallery extends React.Component {
    constructor(props) {
    super(props);
    //     this.state = {
    //     //****Dont forget to change this if you change image option
    //     images:[{id:"12345678910",
    //         title:"title GIF title",

    //         images:{
    //             fixed_width:{
    //                 url:loading_small
    //                 },
    //             original:{
    //                 url:loading_small
    //                 }   
    //         }
    //     }],

    //     testImage: loading_small,
    //     open:false,
    //     gifInfo:""

    // }
    // this.handleGifModalOpen = this.handleGifModalOpen.bind(this);









        this.state = {
            elements:[
            "https://media3.giphy.com/media/xUA7bgONYM1FrC7Vra/200w.gif",
            "https://media2.giphy.com/media/l46C5lFYdNr24NlwQ/200w.gif",
            "https://media3.giphy.com/media/14smAwp2uHM3Di/200w.gif",
            "https://media2.giphy.com/media/l0IypeKl9NJhPFMrK/200w.gif",
            "https://media0.giphy.com/media/oTp83Eya7YmR2/200w.gif",
            "https://media3.giphy.com/media/l2JIdnF6aJnAqzDgY/200w.gif",
            "https://media0.giphy.com/media/3otPosTkbdkUxVojkI/200w.gif",
            "https://media2.giphy.com/media/3og0INyCmHlNylks9O/200w.gif",
            "https://media1.giphy.com/media/l0HlvtIPzPdt2usKs/200w.gif",
            "https://media1.giphy.com/media/JfDNFU1qOZna/200w.gif",
            "https://media2.giphy.com/media/3oz8xZvvOZRmKay4xy/200w.gif",
            "https://media2.giphy.com/media/l3V0slU7u7quJuZ3O/200w.gif",
            "https://media1.giphy.com/media/11tTNkNy1SdXGg/200w.gif",
            "https://media0.giphy.com/media/d3mlE7uhX8KFgEmY/200w.gif",
            "https://media1.giphy.com/media/sanoHrtWDN5ew/200w.gif",
            "https://media2.giphy.com/media/3o8doT9BL7dgtolp7O/200w.gif",
            "https://media0.giphy.com/media/yoJC2QsDYWQNGCrvkA/200w.gif",
            "https://media0.giphy.com/media/xTiTnslZ0E5sqMbEac/200w.gif",
            "https://media3.giphy.com/media/l1KVaj5UcbHwrBMqI/200w.gif",
            "https://media0.giphy.com/media/3o7btW6jvrZduOA3ZK/200w.gif"
            ]
        }
    } 

    // componentDidMount() {
    //     getGifs(this.props.searchQuery).then(value => {
    //         //console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#", value)
    //         //console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#", value[0])
    //       this.setState({
    //         images:value
    //       });
    //     });

    // }  

    // componentWillReceiveProps(nextProps) {
    //     // The If statement prevents re-render if search is the same
    //     if (nextProps.searchQuery !== this.props.searchQuery) {
    //             getGifs(nextProps.searchQuery).then(value => {
    //                 //console.log("#@#@#@#@#@#@#@#@#@#@#@#@#@#", value)
    //                 this.setState({
    //                     images:value
    //                 });
    //             });
    //     }
    // }








    render() {
        const childElements = this.state.elements.map(function(element){
           return (
                <li className="image-element-class">
                    <img src={element} />
                </li>
            );
        });
    
        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                
            {
                childElements
                // this.state.elements.map(function(element){
                //    return (
                //         <li className="image-element-class">
                //             <img src={element} />
                //         </li>
                //     )
                // })
            }





            </Masonry>
        );
    }
}
 //{childElements}
//export default Gallery;
export default withStyles(styles)(Gallery);





