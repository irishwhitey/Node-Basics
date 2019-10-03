var fs = require('fs');

fs.readFile('./fred3.data', function(err,data){
	console.log('2');
	fs.readFile('./fred4.data', function(err,data){
		console.log('3');
	})
	console.log('4');

})

console.log('1');


//-----------------------------------------------

// var file4Callback =  function(err,data){
// 		console.log('3');
// 	}

// var file3Callback = function(err,data){
// 	console.log('2');
// 	fs.readFile('./fred4.data',file4Callback);
// 	console.log('4');

// }
// fs.readFile('./fred3.data', file3Callback)
// console.log('1');
//
//Matt 2413
//Mike 1243
//Alan 1243

