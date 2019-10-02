// var fs = require('fs');

// var makePromise = function(filename, successLog,resolve, reject){
// 	return new Promise(function(resolve, reject){
// 		fs.readFile(filename, function(err,data){
// 			if (!err){
// 				console.log(successLog);
// 				resolve(data);
// 			}
// 			else{
// 				reject('bad stuff')
// 			}
// 		})	
// 	})
// };

// var promise1 = new Promise(function(resolve, reject){
// 	return makePromise('./fred3.data','3',resolve, reject);	
// });

// promise1
// 	.then(function(data) {
// 		console.log('2');				
// 		return new Promise(function(resolve, reject){
// 			fs.readFile('./fred4.data', function(err,data){
// 				if (!err){
// 					console.log('4');
// 					resolve(data);
// 				}
// 				else{
// 					reject('bad stuff')
// 				}
// 			});	
// 		})		
// 	})
// 	.then(function(data) {
// 		return makePromise('./fred5.data','5');	
// 	})
// 	.then(function(data) {
// 		return makePromise('./fred6.data','6');	
// 	});

// console.log('1');


var fs = require('fs');
var promise = new Promise(function(success,failure){
    fs.readFile('./largefile.dat', function(err,data){
        console.log('first callback');
        success();
    })
})
promise
.then(function(data){
    console.log('second then ');
    return new Promise(function(success,failure){
        fs.readFile('./largefile.dat', function(err,data){
            setTimeout(function(){
                success();
            },10000)
            console.log('second callback');
            
        })
    })
})
.then(function(data){
    console.log('third then');
})
.then(function(data){
    console.log('forth then');
})
console.log('global')