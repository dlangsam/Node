var fs = require('fs') 
const path = require('path');

function hasExtension(fileName, index, arr){
	var fileExt = path.extname(fileName);

	var result = fileExt.includes(ext)


	if(result){
		console.log(fileName);
	}
	//return fileName.length > 10;

}
//Asynchronously reads the entire contents of a file. Example:
var ext = process.argv[3];

fs.readdir(process.argv[2], function (err, list) {
  if (err) throw err;
  list.filter(hasExtension, ext)

	
});


     // var fs = require('fs')  
     // var path = require('path')  
       
     // var folder = process.argv[2]  
     // var ext = '.' + process.argv[3]  
       
     // fs.readdir(folder, function (err, files) {  
     //   if (err) return console.error(err)  
     //   files.forEach(function (file) {  
     //     if (path.extname(file) === ext) {  
     //       console.log(file)  
     //     }  
     //   })  
     // })  
   
