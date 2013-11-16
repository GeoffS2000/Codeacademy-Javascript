//Intro to for loops

// Example of a for loop:

for (var counter = 1; counter < 6; counter++) {
	console.log(counter);
}


// Edit this for loop!

for (var i = 5; i < 51; i +=5) {
	console.log(i);
}


// Write your very own for loop!
for (var i = 100; i > 0; i -=5) {
    console.log(i);
}

//Arrays!

var names = ["Mao","Gandhi","Mandela"];

var sizes = [4, 6, 3, 2, 1, 9];

var mixed = [34, "candy", "blue", 11];

//Syntax:
var arrayName = [data, data, data];

//Any time you see data surrounded by [ ], it is an array.


// You are now declaring an array.
// Arrays are an awesome data structure!
var junk = ["Geoff", "Doug", 8, 9];
console.log(junk);


// Let's print out every element of an array using a for loop

var cities = ["Berkeley", "Palo Alto", "Berlin", "NYC", "London", "SF"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}


// Ask a question on the Q&A Forum if you get stuck!
var names = ["Geoff", "Doug", "Leslie", "Mike", "George"];

for (i = 0; i < names.length; i++) {
    console.log("I know someone called " + names[i]);
}


var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = 0;
// Write your code below!
for (var i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}

console.log("The largest number is: " + largest);



