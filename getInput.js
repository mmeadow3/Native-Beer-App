"use strict";

const $ = require("jquery")

 $( "#searchBrewery" ).unbind().click(function() {
   console.log( "Handler for .click() called." );
 });
 $( "#searchBeer" ).unbind().click(function() {
   console.log( "yep" );
 });
 $( "#getDetails" ).unbind().click(function() {
   console.log( "worked" );
 });
