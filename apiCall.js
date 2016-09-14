"use strict";

let request = require("request");
const mikeKey = require("./apiKey")

let beer = "sculpin"

function apiCall() {request("https://api.brewerydb.com/v2/search?q=" + beer + "&type=beer&key=" + mikeKey + "&format=json",
function (error, response, body){
  body = JSON.parse(body)
  console.log(body);
})
}
module.exports =  apiCall
