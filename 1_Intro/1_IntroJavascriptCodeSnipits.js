//Javascript code snipits



"GeoffreySpaeth".length


// This is a comment that the computer will ignore. 
// It is for your eyes only!
("cake".length) * 9;


// Also try the Q&A forum to get help
// The link is on the bottom left of the page!
confirm("I feel awesome!");


prompt("What is your name?");


"I'm coding like a champ!".length > 0;


console.log(2 * 5)
console.log("Hello")


//After you run the code, you should see true 4 times, and false 2 times.
//By using `console.log` at the start of each line, 
//we are able to print 6 lines of output.


console.log(15 > 4);
console.log("Xiao Hui".length < 122);
console.log("Goody Donaldson".length >= 8);
console.log(8*2 === 16);
console.log(8 !== 8);
console.log(7 > 8);


if ( 100 > 2 )
{
    console.log("You are good at math!");
}

console.log("Just letting you know: your program got to line 6");


if (2 < 1 )
{
    alert("Let's go down the first road!");
}
else
{
    // What should we do if the condition is false? Fill in here:
    console.log("The condition did not evaluate to true");
}


// Remember, the order and punctuation matter.
// If you get an error, check carefully, line by line.
// If you're really stuck, see the hint!
if (30 < 20){
    console.log("I am right");
}
else {
    console.log("I am wrong");
}


// The computer doesn't worry about extra spaces between words or brackets
// It just cares about the order of where things are placed
// and that you have used the right characters (){}[]"";

// For extra help, a program called a 'linter' is checking your code
// and will put a red 'x' next to the first line that contains errors

if (10 === 10){
    console.log("You got a true!")
} else {
    console.log("You got a false!")
}


// This is an example of an if / else statement.

if (12 / 2 === "Ari".length) {
    confirm("Will this run the first block?");
} else {
    confirm("Or the second block?");
}


if ("Jon".length * 2 / (2+1) === 2)
{
    console.log("The answer makes sense!");
} 
else 
{
    console.log("Error Error Error");
}


// Below is an example of printing the remainder of 18/4 using modulo:
// console.log(18 % 4); 
console.log(14 % 3);
console.log(99 % 8);


//An example of an if/else statement with modulo in the condition

if(12 % 2 === 0) {
    console.log("The first number is even!");
} else {
    console.log("The first number is odd!");
}
console.log(11 % 3);


// Be careful with the substring's letter positions!
"wonderful day".substring(3, 7);

// Use console.log( ) to print out the substrings.
// Here is an example of the 1st to 4th letter of "JavaScript":
// console.log("JavaScript".substring(0,4));
console.log("January".substring(0, 3));
console.log("Melbourne is great".substring(0, 12));
console.log("Hamburgers".substring(3, 10));


// To create a variable, we use only one equals sign
// But to check if two values are equal, we use 3 equal signs.

// declare your variable here:
var myAge = 46;

console.log(myAge);


// Declare a variable on line 3 called
// myCountry and give it a string value.
var myCountry = "United States";

// Use console.log to print out the length of the variable myCountry.
console.log(myCountry.length);

// Use console.log to print out the first three letters of myCountry.
console.log(myCountry.substring(0,3));


// On line 2, declare a variable myName and give it your name.
var myName = "Geoffrey";
// On line 4, use console.log to print out the myName variable.
console.log(myName);
// On line 7, change the value of myName to be just the first 2 
// letters of your name.
var myName = "Ge";
// On line 9, use console.log to print out the myName variable.
console.log(myName);


// On line 2, write your first comment! It can be anything!
// This is a piece of code to show I know what I'm doing
var myJob = "Engineer";
console.log(myJob.length);


// Not sure where to begin? Check the Hint!
var goodJob = "Yes";
if (goodJob === "Yes") {
    console.log("I finished my first course!");
}
else{
    console.log("I failed.");
}