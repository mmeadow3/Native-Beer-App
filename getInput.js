"use strict";

const $ = require("jquery")
const {apiCallBeer, apiCallBrewery} = require("./apiCall")

///////click events for buttons/////////////////

$( "#searchBrewery" ).unbind().click(function() {
  let value = $("#input").val()
   console.log(value);
   apiCallBrewery(value);
   let brewery = apiCallBrewery()
  setTimeout(function () {
      console.log(brewery);
       $(".output").html(brewery)
  }, 2000);
});
$( "#searchBeer" ).unbind().click(function() {
  let value = $("#input").val()
   console.log(value);
   apiCallBeer(value);
   let beer = apiCallBeer()
  setTimeout(function () {
      console.log(beer);
       $(".output").html(beer)
  }, 2000);
});
$( "#getDetails" ).unbind().click(function() {
   console.log( "worked" );
});

///////////////////////////////////////////////////
