/*
        Brendan Ready
        Assignment 04
*/

// The Rock, Paper, Scissors Game

/*
Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible
outcomes include:
- Rock destroys scissors.
- Scissors cut paper.
- Paper covers rock.

Our code will break the game into 3 phases:
1. User makes a choice. How will we collect the user’s choice?
2. Computer makes a choice. How will we collect the computer’s choice?
3. A conditional that determines who wins.

You will be responsible for figuring out some of the logic. These next steps will attempt to guide you
down the right path:
1. Begin by prompting the user for their choice.
2. Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last
assignment. Remember though, rather than 2 options, there will be 3 here.
3. Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock,
paper, or scissors instead.
4. Create a conditional statement that checks the user’s choice in relation to the computer’s choice.
Once a winner is defined, display a message within an alert box indicating who the winner is.
5. What if the result ends in a tie? Figure out how to handle that as well.
6. What if the user enters something other than rock, paper, or scissors into the prompt? Figure out
how to handle that as well.
*/

let userChoice, reset;

function userPrompt() {
        do {
                userChoice = prompt("Please chooose one of the following: \nRock, Paper, or Scissors.").toLowerCase();
        } while (!(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"));
}

userPrompt();

console.log(`User choice is ${userChoice}`);

let computerChoice = Math.floor(Math.random() * 3);

console.log(`random number Computer chose is ${computerChoice}`);

function resetcomputerChoice() {
        if (computerChoice === 0) {
                reset = "rock";
        } else if (computerChoice === 1) {
		reset = "paper";
	} else if (computerChoice === 2) {
		reset = "scissors";
	}
}

resetcomputerChoice();

computerChoice = reset;

console.log(`Computer choice is ${computerChoice}`);

function result(userChoice, computerChoice) {
	if (userChoice === "rock" && computerChoice === "paper") {
	        alert(`You lose! \nYou chose ${userChoice} and the computer chose ${computerChoice}.`);
	} else if (userChoice === "rock" && computerChoice === "scissors") {
		alert(`You win! \nYou chose ${userChoice} and the computer chose ${computerChoice}.`);
	} else if (userChoice === "paper" && computerChoice === "scissors") {
		alert(`You lose! \nYou chose ${userChoice} and the computer chose ${computerChoice}.`);
	} else if (userChoice === "paper" && computerChoice === "rock") {
		alert(`You win! \nYou chose ${userChoice} and the computer chose ${computerChoice}.`);
	} else if (userChoice === "scissors" && computerChoice === "rock") {
		alert(`You lose! \nYou chose ${userChoice} and the computer chose ${computerChoice}.`);
	} else if (userChoice === "scissors" && computerChoice === "paper") {
		alert(`You win! \nYou chose ${userChoice} and the computer chose ${computerChoice}.`);
	} else if (userChoice === computerChoice) {
		alert(`It's a tie! \nYou chose ${userChoice} and the computer chose ${computerChoice}.\n\n Let's play again for a tie breaker!`);
	} else {
		alert("Something went wrong");
	}
}

result(userChoice, computerChoice);

while (userChoice === computerChoice) {
	userPrompt();
	console.log(`After tie User choice is ${userChoice}`);
	computerChoice = Math.floor(Math.random() * 3);
	console.log(`After tie random number Computer chose is ${computerChoice}`);
	resetcomputerChoice();
	computerChoice = reset;
	console.log(`After tie Computer choice is ${computerChoice}`);
	result(userChoice, computerChoice);
}

let again = 'y';

do {
	again = prompt('Play again? (y or n)', 'y');
	if (again === 'y') {
		userPrompt();
		computerChoice = Math.floor(Math.random() * 3);
		resetcomputerChoice();
		computerChoice = reset;
		result(userChoice, computerChoice);
		while (userChoice === computerChoice) {
			userPrompt();
			computerChoice = Math.floor(Math.random() * 3);
			resetcomputerChoice();
			computerChoice = reset;
			result(userChoice, computerChoice);
		}
	}
	// Validate again prompt
	while (again !== "y" && again !== "n") {
		if (again !== "y" && again !== "n") {
			again = prompt('Play again? (y or n)', 'y');
		}
	}
} while (again === 'y');

console.log('Application has exited.');