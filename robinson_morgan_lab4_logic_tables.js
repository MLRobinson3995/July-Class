//  NAME:  Enter your name here
//  DATE:  Enter the current date
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

var p;
var q;
var r;

p = confirm("First value:  Click OK for true or Cancel for false.");
q = confirm("Second value:  Click OK for true or Cancel for false.");
r = confirm("Thrid value:  Click OK for true or Cancel for false.");

if (p || (q || r))
{
    console.log("With " + p + " or " + q + " or " + r + ", the outcome is TRUE.");
} 
else 
{
    console.log("With " + p + " or " + q + " or " + r + ", the outcome is FALSE.");
};
