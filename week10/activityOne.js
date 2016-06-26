
var fs = require('fs');

fs.readFile("best_things_ever.txt", "utf-8", function(err, data){
	if (err){
		console.log(err);
	}

	var dataArray = data.split(",");
	for (i = 0; i < dataArray.length; i++){
		console.log(dataArray[i].trim());
	}


});