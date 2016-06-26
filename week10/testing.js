// how to send arguments to node
// console.log(process.argv);

var math = process.argv[2];
var first = parseFloat(process.argv[3]);
var second = parseFloat(process.argv[4]);

function doMath(math,first,second){

	if (math == "add"){
		console.log(first + second);
	}
	else if (math == "subtract"){
		console.log(first - second);
	}
	else if (math == "multiply"){
		console.log(first * second);
	}
	else if (math == "divide"){
		console.log(first / second);
	}
}


doMath(math,first,second);