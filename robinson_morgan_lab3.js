//alert("JavaScript works!");

/*
 	Morgan Robinson
 	SDI 1407
 	Lab 3
 	Deliverable 1
 	*/

//variables
var theCatIsHome  = true;
var theCatsLives  = 9;
var theCatIsAlive = "the cat is alive";
var theCatsName   = "\"Fluffy\"";

//display values
console.log("A family found a hurt cat.");
console.log("At first they wern't sure, but when they checked they saw that " + theCatIsAlive + ".");
console.log("The cat has " + theCatsLives + " lives left.");
console.log("Its wearing an old tag calling it " + theCatsName + ".");
console.log("It is " + theCatIsHome + " that they decide to bring it home.");

//boolean conditional
theCatIsHome = confirm("Is the cat home?", true);
if(theCatIsHome === true)
{
	//string conditional
	console.log("It's "+ theCatIsHome + " that " + theCatsName + " has become a part of the family.");
	theCatsName = prompt("What do they call the cat now?",  "\"Fluffy\"");
	if(theCatsName === "\"Fluffy\"")
	{
		console.log("His old owner had been asking around the neighborhood.\nFluffy was taken back to his old home.");
	}
	else
	{
		console.log( "The cat, which they named "+ theCatsName + " sat arond the house getting fat in typical feline decadence.");
	}
}
else
{
	//number conditional
	console.log("He got out!");
	theCatsLives = prompt("How many lives does he have left now?", "9");
	theCatsLives = parseInt(theCatsLives);
	
	if(theCatsLives === 0)
	{
		theCatIsAlive = "The cat is dead.";
		console.log("Oh, No! " + theCatIsAlive + " The entire family is sad.");
	}
	else
	{
		console.log("Every thing is fine," + theCatIsAlive + " and safe.\nHe'll be back soon.");
	}
}

console.log("And that's the story of " + theCatsName + " the cat.");
