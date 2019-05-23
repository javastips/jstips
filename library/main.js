const tips = require('./javastips');

// Using each method 
tips.each(['Bianca', 'Pamela', 'Jessica'], function(name,i, list) { // Sarah 0
    if(list[i + 1]) { // true
      console.log(name, 'is younger than', list[i + 1 ] )
    } else {
      console.log(name,'is the oldest');
    }
});
// Using reduce method
console.log(tips.reduce([1,2,3,4], function(a, b) { return  a + b }, 0)) // Start at 0, sum 10

// Applying easy reduce methods 
console.log(tips.easyReduce([1,2,3,4], function(v, sum) { return  v + sum}, 1)); // Start at 1 ,sum = 11

// Using map method 

console.log(tips.map([1,2,3,4], (val) => val + 3 )); // [ 4, 5, 6, 7 ]

// Using filter from tips
let users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false },
   { 'user': 'nelson',   'age': 23, 'active': false }
];
// Print users not actived
//console.log(tips.filter(users,(o) => !o.active ));

// linear search 
tips.linearSearch([1,2,3,4,5,6,7,8], 5); // return true