import axios from "axios";

export default search => {
  return axios({
    method: "get",
    url: `http://api.giphy.com/v1/gifs/${search}&api_key=nSrqu5nPMLDZWmKICduK7XeVKj5tOJCU&limit=40`

    //offset example (choose the gif to start at)
    //url: "http://api.giphy.com/v1/gifs/trending?=&api_key=nSrqu5nPMLDZWmKICduK7XeVKj5tOJCU&offset=3&limit=20",
  }).then(function(response) {
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
