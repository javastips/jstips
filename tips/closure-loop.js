/*
 * Do a closure loop with IIFE ( Immediately-Invoked Function Expression )
 */
for (var x = 1, i = 0; i <= 32; i+= 1) {
	(function(i){
	   setTimeout(function(){
	    	console.log('2^%d = %d', i, x);
	    	x += x;
	   }, 1000);
	})(i);
}
