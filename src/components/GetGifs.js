import axios from "axios";

export default search => {
  return axios({
    method: "get",
    url: `http://api.giphy.com/v1/gifs/${search}&api_key=nSrqu5nPMLDZWmKICduK7XeVKj5tOJCU&limit=40`

    //No Title sample for trouble shooting
    //url: "http://api.giphy.com/v1/gifs/search?q=tel&api_key=nSrqu5nPMLDZWmKICduK7XeVKj5tOJCU&offset=24&limit=3",

    //offset example (choose the gif to start at)
    //url: "http://api.giphy.com/v1/gifs/trending?=&api_key=nSrqu5nPMLDZWmKICduK7XeVKj5tOJCU&offset=3&limit=40",

    //Search example 
	//url: `http://api.giphy.com/v1/gifs/search?q=YOURSEARCH&api_key=nSrqu5nPMLDZWmKICduK7XeVKj5tOJCU&limit=40`
  }).then(function(response) {
  	console.log(response.data.data)
    return response.data.data;
  });
};


//key
//nSrqu5nPMLDZWmKICduK7XeVKj5tOJCU

// HOST
// api.giphy.com

// PATH
// GET /v1/gifs/search
//
//query
// ?q=YOUSEARCh
