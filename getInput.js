"use strict";

const $ = require("jquery")
const {apiCallBeer, getDetails, beerAvailability, beerGlassware, beerData, beerDesc, beerName, beerImage} = require("./apiCall")

///////click events for buttons/////////////////


$( "#searchBeer" ).unbind().click(function() {
  let value = $("#input").val()
  apiCallBeer(value);
  setTimeout(function () {
    $(".outputName").html(beerName)
    $(".outputAbv").html(beerData)
    $(".outputDesc").html(beerDesc)
    $("#input").val("");
  }, 1000);
  $( "#getDetails" ).show( "slow" );
});

// $( "#searchBrewery" ).unbind().click(function() {
//   let value = $("#input").val()
//    console.log(value);
//    apiCallBrewery(value);
//    let brewery = apiCallBrewery()
//   setTimeout(function () {
//       console.log(brewery);
//        $(".output").html(brewery)
//   }, 2000);
// });




$( "#getDetails" ).click(function() {
  getDetails(beerName)
  setTimeout(function () {
  $(".availabilityOutput").html(beerAvailability)
  $(".glasswareOutput").html(beerGlassware)
  $(".imageOutput").html('<img src="'+beerImage+'"/>')
  }, 1000);
});



///////////////////////////////////////////////////
