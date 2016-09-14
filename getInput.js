"use strict";

const $ = require("jquery")
const apiCall = require("./apiCall")

$( "#searchBrewery" ).unbind().click(function() {
   apiCall();
});
$( "#searchBeer" ).unbind().click(function() {
   console.log( "yep" );
});
$( "#getDetails" ).unbind().click(function() {
   console.log( "worked" );
});
