//Intro to functions in Javascript

////////////////////////////////////////////
var balance = 20.97;

// Complete the condition in the ()s on line 4
if (balance < 10) {
	// console.log() the balance minus 5 dollars
	console.log(balance - 5);
} else {
	// Just console.log() the balance
	console.log(balance);
}

////////////////////////////////////////////
// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 11, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then uses the code inside the function!
divideByThree(60);


////////////////////////////////////
// Below is the greeting function!
// See line 7
// We can join strings together using the plus sign (+)
// See the hint for more details about how this works.

var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

// On line 11, call the greeting function!
greeting("Geoffrey Spaeth");


/////////////////////////////////////////////
// Write your foodDemand function below.
// Last hint: In your reusable block of code, end each line
// with a semicolon (;)
var foodDemand = function(food) {
    console.log("I want to eat" + " " + food);
};
foodDemand("apples");


////////////////////////////////////////////////
// Nicely written function:
var calculate = function (number) {
    var val = number * 10;
    console.log(val);
};

// Badly written function with syntax errors!

var greeting = function (name) {
    console.log(name);
};
greeting("steve");


///////////////////////////////////
var orangeCost = function (cost) {
    cost = cost * 5;
    console.log(cost);
};
orangeCost(5);


//////////////////////////////////////
// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(80);
console.log(newNumber);


////////////////////////////////////////
// Define quarter here.
var quarter = function (number) {
    return number / 4;
};




if (quarter(24) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}


//////////////////////////////////////////
// Write your function starting on line 3

var perimeterBox = function(length, width) {
    return length + length + width + width;
};
perimeterBox(4,5);


/////////////////////////////////////
var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);


//////////////////////////////////
var nameString = function ( name ) {
	return "Hi, I am" + " " + name;
};

console.log(nameString("Geoff"));
console.log(name);


///////////////////////////////
// Write your function below. 
// Don't forget to call your function!
var creditCheck = function(income) {
    if (income >= 100) {
        return "You earn a lot of money! You qualify for a credit card.";
    }
    
    else if (income < 100) {
        return "Alas you do not qualify for a credit card. Capitalism is cruel like that.";
    }
};
console.log(creditCheck(75));
