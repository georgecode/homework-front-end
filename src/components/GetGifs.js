import axios from 'axios';

export default (search) => {
	//nSrqu5nPMLDZWmKICduK7XeVKj5tOJCU
	//http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
	//const corsHack = "http://cors-anywhere.herokuapp.com/"
	return axios({
    method: "get",
    url: "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=nSrqu5nPMLDZWmKICduK7XeVKj5tOJCU&limit=10"

  }).then(function(response) {
  	console.log("Responce from giphy worked",response.data.data[0].images.downsized_medium.url)
    //console.log('giphy RESPONCE',response.data.data[0])
    //return "testing"
    return response.data.data
    //return response.data.data[0].images.downsized_medium.url
    //return response.data.data[1];
  });
}

// HOST
// api.giphy.com

// PATH
// GET /v1/gifs/search
//
//query
// ?q=YOUSEARCh





















