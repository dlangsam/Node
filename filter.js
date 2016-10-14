var fs = require('fs') 

function hasExtension(fileName, ext){

	return (fileName.includes(ext));
};


//Asynchronously reads the entire contents of a file. Example:

fs.readdir(process.argv[2], function (err, list) {
  if (err) throw err;
  list.filter(hasExtension, process.argv[3])
  list.forEach(function(file){
  	console.log(file);
  });
	
});