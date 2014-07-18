///  Morgan Robinson
//  07/17/2014
// Scalable Data Infrastructures 1407
//  Day 5 Lab

//varibles

var num1,
	num2,
	i,
	operation;

//divide

var div = function(x, y) {
	
	var end;
	end = (x / y);
	return end;
	
};

//multiply

var mul = function(x, y) {
	
	var end;
	end = (x * y);
	return end;
	
};

//subract

var sub = function(x, y) {
	
	var end;
	end = (x - y);
	return end;
	
};

//add

var add = function(x, y) {
	
	var end;
	end = (x + y);
	return end;
	
};

//prompts

i = parseInt(prompt("What is the operation?\n1.Division\n2.Multiplication\n3.Subtraction\n4.Addition\nEnter the number shown. "));
num1 = parseInt(prompt("What is the first number?", "0"));
num2 = parseInt(prompt("What is the secound number?", "0"));

if (i === 1) {
	
	operation = div(num1, num2);
	
} else if (i ===2){
	
	operation = mul(num1, num2);
	
} else if (i === 3){
	
	operation = sub(num1, num2);
	
} else if (i === 4){
	
	operation = add(num1, num2);
	
} else {
	
	console.log("You did not select an operation.\nTry again with one of the options presented.");
}


//output


if (i === 1) {
	
	if ((num1 === 0) || (num2 === 0)){
		
		console.log (num1 + " divided by " + num2 + " equals 0");
		
	} else {
		
		console.log (num1 + " divided by " + num2 + " equals " + operation);
		
	}
	
} else if (i === 2){
	
	console.log (num1 + " multiplied by " + num2 + " equals " + operation);
	
} else if (i === 3){
	
	console.log (num1 + " subtract " + num2 + " equals " + operation);
	
} else if (i === 4){
	
	console.log (num1 + " add " + num2 + " equals " + operation);
	
}