const tips = require('./javastips');

// Using each method 
tips.each(['Bianca', 'Pamela', 'Jessica'], function(name,i, list) { // Sarah 0
    if(list[i + 1]) { // true
      console.log(name, 'is younger than', list[i + 1 ] )
    } else {
      console.log(name,'is the oldest');
    }
});


// Using map method 

console.log(tips.map([1,2,3,4], (val) => val + 3 ));

// Using filter from tips
let users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false },
   { 'user': 'nelson',   'age': 23, 'active': false }
];

// Print users do not be active
//console.log(tips.filter(users,(o) => !o.active ));

// linear search 
tips.linearSearch([1,2,3,4,5,6,7,8], 5); // return false 