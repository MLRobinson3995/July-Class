/*
 	Morgan Robinson
 	SDI 1407
 	Lecture 2
 	*/

/*variables*/
var theCatIsHome  = true;
var theCatsLives  = 9;
var theCatIsAlive = "The cat came back!";
var theCatsName   = "\"Fluffy\"";

alert("A family found a cat.");
theCatsName = prompt("What is the cat's name?",  "\"Fluffy\"");
theCatIsHome = confirm("They named him " + theCatsName + ". \nHe got out of the house!");
theCatsLives = prompt("How many lives does he have?", "9");
theCatsLives = parseInt(theCatsLives);

console.log("The cat is named " + theCatsName + " and he has gotten out of the house.");
console.log("He has " + theCatsLives + " lives left.");
console.log(theCatIsAlive);
alert("He has " + theCatsLives + " left.");
alert(theCatIsAlive);