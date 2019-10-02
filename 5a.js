var fs = require('fs');

// fs.readFile('./fred3.data', function(err,data){
// 	console.log('3');
// 	fs.readFile('./fred4.data', function(err,data){
// 		console.log('4');
// 		fs.readFile('./fred5.data', function(err,data){
// 			console.log('5');
// 			fs.readFile('./fred6.data', function(err,data){
// 				console.log('6');
// 			});
// 		});
// 	});
// 	console.log('a');
// })

// console.log('1');




var file6Callback =  function(err,data){
		console.log('6');
}

var file5Callback =  function(err,data){
		console.log('5');
		fs.readFile('./fred6.data',file6Callback);
}
var file4Callback =  function(err,data){
		console.log('4');
		fs.readFile('./fred5.data',file5Callback);
}

var file3Callback = function(err,data){
	console.log('3');
	fs.readFile('./fred4.data',file4Callback);
	console.log('a');
}

fs.readFile('./fred3.data', file3Callback)
console.log('1');