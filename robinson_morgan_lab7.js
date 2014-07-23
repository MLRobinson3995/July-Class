var objCons = function(name, taxonomy, speed) {
	
	this.comName = name;
	this.sciName = taxonomy;
	this.topSpeed = speed;
	this.tired = function() {
		
		if (this.topSpeed > 0) {
			this.topSpeed = this.topSpeed - 5;
		}
		
	};
	
};

var animalFunction = function() {
	
	for (index in jsonData.animals) {
			i = index;
			animal = new objCons(jsonData.animals[i].comName, jsonData.animals[i].sciName, jsonData.animals[i].topSpeed);
			console.log("The " + animal.comName + "(scientific name " + animal.sciName + ")\ncan travel at " + animal.topSpeed);
			i--;
		
	}
	
};

animalFunction();
