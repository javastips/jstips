"use strict";

const library = {}

// each function , implementation of forEach .
library.each = function(list, callback) {
  // list : array, callback: function 
  if(Array.isArray(list)) {
    // loop through array
    for(var i = 0; i < list.length; i++){
      // Call the callback with a list item
      callback(list[i], i, list);
    }
  } else {
    // loop through object 
    for(var key in list) {
      //call the callback with list items
        callback(list[key], key, list);
    }
  }
};

// map function , implementation of map .
library.map = function(list, callback) {
    // create an empty array to store
   var storage = [];
   tips.each(list, function(v,i, list) {
      storage.push(callback(v, i, list));
   });
   // return []
   return storage;
};

// filter array
library.filter = function() {

};

// function to trie values of an array 
library.sort = function (array) {
    // function swap() {

    // }

};

// Simple linear search implementation 
library.linearSearch = function (array, number) {
  // size of array
  var size = array.length; 
  //check if the array it's really an array
  if(Array.isArray(array)) {
    // if an array , loop the array
    for(var i = 0; i < size; i++) {
      // check if the number is present in the array 
      if(array[i] == number) {
        // show true and the position in the array
       console.log(true);
      }
    }
    // if is not present show false;
    console.log(false);
  } // if not an array show error message 
  else {
    console.log('Wrong type ! , you need an array');
  }
    
};

// function  reversing element's
library.reverse = function() {

}


// Destructuring of tips object 
const { each , map , linearSearch }  = library; 

// export modules 
module.exports = {
    each , map , linearSearch 
};

