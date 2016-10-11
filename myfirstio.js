var fs = require('fs') 

var myBuffer = fs.readFileSync(process.argv[2])

var array = myBuffer.toString().split('\n')

console.log(array.length-1)