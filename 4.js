const fs = require('fs');

console.log('5s TIMEOUT registered: ' + new Date());
setTimeout(function(){	
	console.log("callback running");
	console.log('IN 5s TIMEOUT timer callback : ' + new Date());
}, 5000);

console.log('BEFORE FILE COPY ' + new Date());
const data = fs.copyFileSync('./fred3.data','./fred4.data'); 
//console.log(data);
console.log('AFTER FILE COPY ' + new Date());