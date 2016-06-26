
var bandsList = require("./bands.js");

// console.log(bandsList.bands);
// console.log(bandsList.others);
// console.log(bandsList);
function runBands(bandsList){
	console.log(bandsList);
	for (variable in bandsList.bands){
		console.log(bandsList.bands[variable]);
	}
}

runBands(bandsList);

// for (variable in bandsList.bands){
// 	console.log(bandsList.bands[variable]);
// }