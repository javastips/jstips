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


// linear search 
tips.linearSearch([1,2,3,4,5,6,7,8], 0);
