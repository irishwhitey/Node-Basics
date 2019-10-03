console.log('helper here');
const printSomethingPretty = function(){
	console.log('here 2')
}
// module.exports = {
// 	printSomethingPretty : function(theString){
// 		console.log(theString);
// 	},

// }

// exports.printTwice = function(theString){
// 	console.log(theString);
// 	console.log(theString);
// }

module.exports = function(aString){
	console.log(aString);
}
