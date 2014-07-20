///  Morgan Robinson
//  07/19/2014
// Scalable Data Infrastructures 1407
//  Day 6 Lab

var alias,
	realName,
	i;
	

var hero = function() {
	
	var heroName = new Array("Superman", "Batman", "Wonder Woman", "Flash", "Martian Manhunter", "Aquaman", "Hawkman");
	return heroName;
};

var civilian = function() {
	
	var secretIdentity = new Array("Clark Kent", "Bruce Wayne", "Diana Prince", "Barry Allen", "John Jones", "Arthor Curry", "Carter Hall");
	return secretIdentity;
	
};

alias = hero();
realName = civilian();

alias.push("Cyborg");
realName.push("Victor Stone");

for (i = 0; i < alias.length; i++) {
	
	console.log (alias[i] + "'s civilain name is " + realName[i]);
	
};
