/*
        Brendan Ready
        Assignment 04
*/

// Practice with Functions

/*
1. Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and
return the result. It should log a string like "Half of 5 is 2.5.".
2. Write a function called squareNumber() that accepts one argument (a number), square that
number, and return the result. It should also log a string like "The result of squaring the number 3 is
9."
3. Write a function called percentOf() that accepts two numbers, figure out what percent the first
number represents of the second number, and return the result. It should log a string like "2 is 50%
of 4."
4. Write a function called findModulus() that accepts two numbers. Within the function write a
statement that returns the modulus of the first and second parameters. It should log a string like "2
is the modulus of 4 and 10."
5. Create a JavaScript function that accepts a certain amount of numbers as parameters. Those
numbers should be collected using a prompt and the numbers should be delimited by commas.
Once the values are collected, find the sum of all of the numbers combined. You will need to use a
function, loop, arguments object, and several type conversion global functions to accomplish this
task.
*/

//STEP 1

function halfNumber(number) {
	let total = Number(number) / 2;
	console.log(`Half of ${number} is ${total}`);
}

halfNumber(100);
halfNumber(10);
halfNumber(9);
halfNumber(5);

//STEP 2

function squareNumber(number) {
	let total = Number(number) ** 2;
	console.log(`The result of squaring the number ${number} is ${total}`);
}

squareNumber(3);
squareNumber(5);
squareNumber(9);
squareNumber(100);

//STEP 3

function percentOf(number1, number2) {
	let total = Number(number1 / number2) * 100;
	console.log(`${number1} is ${total}% of ${number2}`);
}

percentOf(2, 4);
percentOf(10, 50);
percentOf(25, 100);
percentOf(7, 140);

//STEP 4

function findModulus(number1, number2) {
	let total = Number(number2 % number1);
	console.log(`${total} is the modulus of ${number1} and ${number2}`);
}

findModulus(4, 10);
findModulus(7, 20);
findModulus(25, 100);
findModulus(7, 747);

//STEP 5

let string, arrayNumbers, sum;

function userPrompt() {
	string = prompt("Enter at least 2 numbers separated by commas as x,x");
	arrayNumbers = string.split(",");
}

userPrompt();

let i = 0;

do {
	let number = parseFloat(arrayNumbers[i]);
	if (arrayNumbers.length < 2) {
		alert("You didn't enter at least 2 numbers separated by commas. \nPlease try again.");
		userPrompt();
		continue;
	} else if (isNaN(number)) {
		alert("You didn't enter only numbers separated by commas. \nPlease try again.");
		userPrompt();
		continue;
	} else if (arrayNumbers[0] === "") {
		alert("You didn't enter at least 2 numbers separated by commas. \nPlease try again.");
		userPrompt();
		continue;
	} else if (i < arrayNumbers.length) {
		console.log("Array length: " + arrayNumbers.length);
	} else {
		break;
	}
	i++;
} while (i < arrayNumbers.length || arrayNumbers.length < 2);

function addNumbers(arrayNumbers) {
	sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += parseFloat(arguments[i]);
	}
	return sum;
}

addNumbers(...arrayNumbers);

do {
	if (isNaN(sum)) {
		alert("You didn't enter only numbers separated by commas. \nPlease try again.");
		userPrompt();
		addNumbers(...arrayNumbers);
	} else if (arrayNumbers.length < 2) {
		alert("You didn't enter at least 2 numbers separated by commas. \nPlease try again.");
		userPrompt();
		addNumbers(...arrayNumbers);
	} else {
		console.log("Numbers are : " + arrayNumbers);
	}
	i = 0;
	while (i < arrayNumbers.length || arrayNumbers.length < 2) {
		let number = parseFloat(arrayNumbers[i]);
        if (arrayNumbers.length < 2) {
			alert("You didn't enter at least 2 numbers separated by commas. \nPlease try again.");
			userPrompt();
			continue;
		} else if (arrayNumbers[0] === "") {
			alert("You didn't enter at least 2 numbers separated by commas. \nPlease try again.");
			userPrompt();
			continue;
		} else if (isNaN(number)) {
			alert("You didn't enter only numbers separated by commas. \nPlease try again.");
			userPrompt();
			addNumbers(...arrayNumbers);
			continue;
		} else if (isNaN(sum)) {
			alert("You didn't enter only numbers separated by commas. \nPlease try again.");
			userPrompt();
			addNumbers(...arrayNumbers);
			continue;
		} else {
			console.log("Number added");
			addNumbers(...arrayNumbers);
		}
		i++;
	}
} while (isNaN(sum));

console.log(`The sum is ${sum}`);
alert(`The sum is ${sum}`);