"use strict";

let request = require("request");
const input = require("./getInput")
const mikeKey = require("./apiKey")

request("https://api.brewerydb.com/v2/brewery/Xu5wTW/beers?key=" + mikeKey + "&format=json",
function (error, response, body){
  body = JSON.parse(body)
  console.log(body);
})
