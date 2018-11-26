
import React, { Component } from "react";
import loading_small from "../images/loading_small.gif";
//git wants the g in the path ./GetGifs Uppercase,  React wants the named import lowercase
//so the paths file will be upper case and the named import will be lowercase
import getGifs from "./GetGifs";
import { withStyles } from "@material-ui/core/styles";
import GifModal from "./GifModal";
import Masonry from "react-masonry-component";


const styles = theme => ({
  masonryCon: {
    margin: "0 auto"
  },
  gifCon: {
    margin: 10,
    borderRadius: "8px",
    padding: 3,
    "&:hover": {
      backgroundColor: "rgba(147, 130, 122, 0.3)"
    }
  },
  gif: {
    borderRadius: "8px",
    width: 120,
    //360-up
    "@media (min-width: 360px)": {
      width: 150
    },
    "@media (min-width: 400px)": {
      width: 170
    },
    "@media (min-width: 500px)": {
      width: 200
    },
    "@media (min-width: 600px)": {
      width: 250
    }
  }

});

const masonryOptions = {
  transitionDuration: 0
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

class GifCon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //****Dont forget to change this if you change image option
      images: [
        {
          id: "12345678910",
          title: "Title",
          images: {
            //downsampled to speed up load time
            fixed_width_downsampled: {
              url: loading_small
            },
            original: {
              url: loading_small
            }
          }
        }
      ],

      testImage: loading_small,
      open: false,
      gifInfo: ""
    };
    this.handleGifModalOpen = this.handleGifModalOpen.bind(this);
    this.getData = this.getData.bind(this);
  }

  //This Gets the images from Giphy
  componentDidMount() {
    getGifs(this.props.searchQuery).then(value => {
      this.setState({
        images: value
      });
    });
  }
  //This will allow a rerender if a new search is made
  componentWillReceiveProps(nextProps) {
    // The If statement prevents re-render if search is the same
    if (nextProps.searchQuery !== this.props.searchQuery) {
      getGifs(nextProps.searchQuery).then(value => {
        this.setState({
          images: value
        });
      });
    }
  }
  //Opens and closes gifModal
  handleGifModalOpen(event) {
    this.setState({
      open: true,
      gifInfo: event.target
    });
  }
  //Fixes search bar bug allows info to be passed back so
  //Gif Modal can be properly closed
  getData(val) {
    this.setState({
      open: val
    });
  }

  render() {
    const { classes } = this.props;

    //transitionDuration: 0,
    const masonryOptions = {
      fitWidth: true
    };

    const childElements = function(images, openModal) {
      //fixed_width is 200px

      //keeping this here for future debugging
      //console.log("images", images[0]);
      return images.map(function(el) {
        return (
          <div key={`div${el.id}`} className={classes.gifCon}>
            <img
              className={classes.gif}
              src={el.images.fixed_width_downsampled.url}
              key={el.id}
              onClick={openModal}
              alt="testzzz"
              title={el.title}
              data-big={el.images.original.url}
              data-username={el.username}
              data-rating={el.rating}
              data-import-date={el.import_datetime}
            />
          </div>
        );
      });
    };

    return (

      <div>
        <GifModal
          gifInfo={this.state.gifInfo}
          open={this.state.open}
          sendData={this.getData}
        />

        <Masonry
          //Masonry API
          //https://www.npmjs.com/package/react-masonry-component
          //className={'my-gallery-class'} // default ''
          className={classes.masonryCon}
          elementType={"div"} // default 'div'
          options={masonryOptions} // default {} isFitWidth
          disableImagesLoaded={false} // default false
          //seems to load faster when this is set to true
          updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
          imagesLoadedOptions={imagesLoadedOptions} // default {}
        >
          {childElements(this.state.images, this.handleGifModalOpen)}
        </Masonry>
      </div>
    );
  }
}

export default withStyles(styles)(GifCon);
