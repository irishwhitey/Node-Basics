var fs = require('fs');

var kickOff = function(success, reject){
    console.log('promise kick off is running....');
    fs.readFile('./largefile.data', function(err,data){
        console.log('read file callback....');
        if (!err){
            success(data);
        }
        else{
            reject(err);
        }
    });
};
console.log('here');
var promise1 = new Promise(kickOff)
    .catch(function(error) {
        console.error("Error " + error);
        return Promise.reject()
    })
    .then(function(data){
        console.error("************In Then**********8"); 
        console.error(data.length); 
    });
    // .then(function(data){
    //     console.log('nothing to see here');
    // }, function(err){
    //     console.log('bad things happened');
    // });

// promise
// .then(function(data){
//     console.log('second then ');
//     return new Promise(function(success,failure){
//         fs.readFile('./largefile.dat', function(err,data){
//             setTimeout(function(){
//                 success();
//             },10000)
//             console.log('second callback');
            
//         })
//     })
// })
// .then(function(data){
//     console.log('third then');
// })
// .then(function(data){
//     console.log('forth then');
// })
// console.log('global')