import axios from 'axios';

export default (search) => {
	//key
	//nSrqu5nPMLDZWmKICduK7XeVKj5tOJCU

	//http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
	//const corsHack = "http://cors-anywhere.herokuapp.com/"
	return axios({
    method: "get",
    //url: "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=nSrqu5nPMLDZWmKICduK7XeVKj5tOJCU&limit=10",
    //search
   	//url:`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=nSrqu5nPMLDZWmKICduK7XeVKj5tOJCU&limit=100`,
   	//trending
    url: `http://api.giphy.com/v1/gifs/${search}&api_key=nSrqu5nPMLDZWmKICduK7XeVKj5tOJCU&limit=30`,
   	 
   	//offset (choose the gif to start at)
   	 //url: "http://api.giphy.com/v1/gifs/trending?=&api_key=nSrqu5nPMLDZWmKICduK7XeVKj5tOJCU&offset=3&limit=20",
   	 
   	

  }).then(function(response) {
  	//console.log("Responce from giphy worked",response.data.data[0].images.downsized_medium.url)
    //console.log('giphy RESPONCE',response.data.data[1])
    //console.log("number of gif's", response.data.data.length)
    return response.data.data
  });
}

// HOST
// api.giphy.com

// PATH
// GET /v1/gifs/search
//
//query
// ?q=YOUSEARCh





















