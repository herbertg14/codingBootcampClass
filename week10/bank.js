var fs = require("fs");

var type = process.argv[2];

function main(){
	if (type == "total"){
		fs.readFile("bank.txt", "utf-8", function(err, data){
			if (err){
				console.log(err);
			}

			var dataArray = data.split(",");
			var sum = 0;
			for (i = 0; i < dataArray.length; i++){
				sum += parseFloat(dataArray[i].trim());
			}
			console.log("the total is: $" + sum.toFixed(2));
		});
	}
	else if (type == "deposit"){
		var amount = process.argv[3];
		fs.appendFile("bank.txt", ", " + amount, function(err){
			if (err){
				console.log(err);
			}
			else{
				console.log("amount added: $" + amount);
			}
		});
	}
	else if (type == "withdraw"){
		var amount = process.argv[3];
		fs.appendFile("bank.txt", ", " + "-" +amount, function(err){
			if (err){
				console.log(err);
			}
			else{
				console.log("amount widthawn: $" + amount);
			}
		});
	}
	else if (type == "lotto"){

	}
}

main();