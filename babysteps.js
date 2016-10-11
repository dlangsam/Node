var myNumbers = process.argv
myNumbers.splice(0,2)


var sum = 0;
myNumbers.forEach(function(number){
	sum += parseFloat(number);
})

console.log(sum)