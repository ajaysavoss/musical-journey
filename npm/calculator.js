const readlineSync = require("readline-sync");
var num1 = readlineSync.questionInt("Please enter your first number: ");
var num2 = readlineSync.questionInt("Please enter your second number: ");
var enteredOperator = readlineSync.question("Please enter the operation to perform: add, sub, mul, div ");

function addTwoNumbers(num1, num2){
    return num1 + num2;
}
function subtractTwoNumbers(num1, num2){
    return num1 - num2;
}
function multiplyTwoNumbers(num1, num2){
    return num1 * num2;
}
function divideTwoNumbers(num1, num2){
    return num1 / num2;
}

function myCalculator(num1, num2, enteredOperator){
    if (enteredOperator == "add"){
        console.log(addTwoNumbers(num1, num2));
    }
    else if (enteredOperator == "sub"){
        console.log(subtractTwoNumbers(num1, num2));
    }
    else if (enteredOperator == "mul"){
        console.log(multiplyTwoNumbers(num1, num2));
    }
    else if (enteredOperator == "div"){
        console.log(divideTwoNumbers(num1, num2));
    }
    else {
        console.log("This operation is not recognized. Please try again.");
    }
}

myCalculator(num1, num2, enteredOperator);