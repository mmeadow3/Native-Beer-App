"use strict";

let request = require("request");
const mikeKey = require("./apiKey")

// let beer = "sculpin"
let brewery = "yuengling"

function apiCallBeer(beer) {request("https://api.brewerydb.com/v2/search?q=" + beer + "&type=beer&key=" + mikeKey + "&format=json",
function (error, response, body){
  body = JSON.parse(body)
  // console.log(body.data[0].abv);
  console.log(body.data);

})
}


// request for brewery
function apiCallBrewery(brewery) {request("https://api.brewerydb.com/v2/search?q=" + brewery + "&type=brewery&key=" + mikeKey + "&format=json",
function (error, response, body){
  body = JSON.parse(body)
  console.log(body.data);
})
}
module.exports =  {apiCallBeer, apiCallBrewery}
