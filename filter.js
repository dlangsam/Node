var fs = require('fs') 




//Asynchronously reads the entire contents of a file. Example:

fs.readdir(process.argv[2], function (err, data) {
  if (err) throw err;
  var array = data.toString().split('\n')

	console.log(array.length-1)
});