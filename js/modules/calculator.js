// ADD A PRIVATE FUNCTION CALLED CALCULATE
const calculate = () => console.log("PRIVATE FUNCTION IS WORKING");

// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION
const add = (x, y) => {
    calculate();
    return x + y;
};

// SUBTRACT FUNCTION
const subtract = (x, y) => x - y;

// MULTIPLY FUNCTION
const multiply = (x, y) => x * y;

// DIVIDE FUNCTION
const divide = (x, y) => x / y;

// EXPORT THE FOUR PUBLIC FUNCTIONS
export { add, subtract, multiply, divide };