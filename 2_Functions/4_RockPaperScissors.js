//Rock Papper Scissors

var userChoice = prompt("Do you choose rock, paper or scissors?");
console.log("User Choice: " + userChoice);
var computerChoice = Math.random();
console.log("Random Number: " + computerChoice);
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice < 0.67) {
	computerChoice = "paper";
} else if (computerChoice < 1){
	computerChoice = "scissors";
}
console.log("Computer Choice: " + computerChoice);
var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        }
        else if (choice2 === "paper") {
            return "paper wins";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        }
        else if (choice2 === "scissors") {
            return "scissors wins";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        }
        else if (choice2 === "paper") {
            return "scissors wins";
        }
    }
};
compare(userChoice, computerChoice);

