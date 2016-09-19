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
let beerData = []

function apiCallBeer(beer) {
  const data = {
    uri: "https://api.brewerydb.com/v2/search?q=" + beer + "&type=beer&key=" + mikeKey + "&format=json",
    json: true // Automatically parses the JSON string in the response
  };

  rp(data)
    .then(function (body) {
      //   console.log(body.data[0].abv);
      // body = body.data[0].name body.data[0].name
      let name = body.data[0].name
      let abv = body.data[0].abv
      let decsription = body.data[0].description
      beerData.splice(0, beerData.length);
        beerData.push(name, abv, decsription)
    })
    .catch(function (err) {
      console.log(err);
  });
  return beerData
}
///////request for brewery///////////////////////
let getBrewery = []

function apiCallBrewery(brewery) {
  const data = {
    uri: "https://api.brewerydb.com/v2/search?q=" + brewery + "&type=beer&key=" + mikeKey + "&format=json",
    json: true // Automatically parses the JSON string in the response
  };

  rp(data)
    .then(function (body) {
      //   console.log(body.data[0].abv);
      body = body.data[0].abv
      getBrewery.splice(0, getBrewery.length);
        getBrewery.push(body)
    })
    .catch(function (err) {
      console.log(err);
  });
  return getBrewery
}

module.exports =  {apiCallBeer, apiCallBrewery}
