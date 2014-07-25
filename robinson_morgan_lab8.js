///  Morgan Robinson
//  07/22/2014
// Scalable Data Infrastructures 1407
//  Day 8 Lab

//problem 1
/*
	//variables
	var text = "thisaddress@gmail.com";
	var end;
	
	//function
	var addConfirm = function(address) {

		//at1
		var atThere = address.indexOf("@");
		
		if (atThere === -1) {
			
			var atIn = false;
			
		} else {
			
			var atIn = true;
			
		};
		
		//at2
		var atThere2 = address.lastIndexOf("@");
		
		if (atThere2 === atThere) {
			
			var atCheck = true;
			
		} else {
			
			var atCheck = false;
			
		};
		
		//at verify
		if (atIn && atCheck) {
			
			var atIncluded = true;
			
		} else {
			
			var atIncluded = false;
			
		};
		
		//period check
		var perThere = address.indexOf(".");
		
		if (perThere === -1) {
			
			var perIncluded = false;
			
		} else {
			
			var perIncluded = true;
			
		};
		
		//final check	
		if (atIncluded && perIncluded) {
			
			var confirm = true;
			
		} else {
			
			var confirm = false;
			
		};
		
		return confirm;
		
	};
	
	//callout
	end = addConfirm(text);
	
	//result log	
	if (end === true) {
		
		console.log("\"" + text + "\" is confirmed as a plausible email address.");
		
	} else {
		
		console.log("The entered address is invalid.  Check the address and try again.");
	
	};
*/

//problem 2

//variable
var list = "a,b,c,d";
var divide1 = ",";
var divide2 = "/";
var listEnd = "";

//function

var splitList = function (listString) {
	
	var spread = listString.split(divide1);

	for (var index in spread) {
			
			listEnd = listEnd + spread[index] + divide2;
			
		}
	
};

//callout

splitList(list);

//result

console.log(listEnd);
