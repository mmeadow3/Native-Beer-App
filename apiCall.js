"use strict";

let request = require("request");
let rp = require("request-promise");
const mikeKey = require("./apiKey")

// let beer = "sculpin"
// let brewery = "yuengling"

// function apiCallBeer(beer, cb) {
//   request("https://api.brewerydb.com/v2/search?q=" + beer + "&type=beer&key=" + mikeKey + "&format=json",
//     function cb(error, response, body){
//       body = JSON.parse(body)
//       // console.log(beerBody.data[0].abv);
//       // return (beerBody.data[0].abv)
//   })
//   return cb()
// }

//   return requestPromise()
//     .then(beerData => beerData)
//     .catch(err => console.log(err));
// }
let getBeer = []

function apiCallBeer(beer) {
  const data = {
    uri: "https://api.brewerydb.com/v2/search?q=" + beer + "&type=beer&key=" + mikeKey + "&format=json",
    json: true // Automatically parses the JSON string in the response
  };

  rp(data)
    .then(function (body) {
      //   console.log(body.data[0].abv);
      body = body.data[0].abv
      getBeer.splice(0, getBeer.length);
        getBeer.push(body)
    })
    .catch(function (err) {
      console.log(err);
  });
  return getBeer
}
// request for brewery
function apiCallBrewery(brewery) {request("https://api.brewerydb.com/v2/search?q=" + brewery + "&type=brewery&key=" + mikeKey + "&format=json",
function (error, response, body){
  body = JSON.parse(body)
  console.log(body.data);
})
}
module.exports =  {apiCallBeer, apiCallBrewery}
