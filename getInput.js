"use strict";

const $ = require("jquery")
const {apiCallBeer, apiCallBrewery} = require("./apiCall")

///////click events for buttons/////////////////

$( "#searchBrewery" ).unbind().click(function() {
  let value = $("#input").val()
   console.log(value);
   apiCallBrewery(value);
});
$( "#searchBeer" ).unbind().click(function() {
  let value = $("#input").val()
   console.log(value);
   apiCallBeer(value);
   let beer = apiCallBeer()
  setTimeout(function () {
      console.log(beer);
       $(".output").append(beer)
  }, 2000);
});
$( "#getDetails" ).unbind().click(function() {
   console.log( "worked" );
});

///////////////////////////////////////////////////
