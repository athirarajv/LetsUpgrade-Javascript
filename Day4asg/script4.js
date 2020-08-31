console.log("LetsUpgrade JS Assignment : Day4 - Question 4");
console.log("Calculator in Javascript");
// Calculator in Javascript which can do operations such as Addition, Subtraction, Multiplication, Division, Square root and Percentage.

var operator = prompt("Enter '+' for Addition, '-' for Subtraction, '*' for Multiplication, '/' for Division, 'sq' for Square root and '%' for Percentage.");
switch(operator) {
    case "+":
        var num = prompt("Enter two numbers to add", "5 10");
        numb = num.split(" ");
        console.log(`${numb[0]} + ${numb[1]} = ${+numb[0] + +numb[1]}`);
        break;
    case "-":
        var num = prompt("Enter two numbers to subtract", "15 10");
        numb = num.split(" ");
        console.log(`${numb[0]} - ${numb[1]} = ${+numb[0] - +numb[1]}`);
        break;
    case "*":
        var num = prompt("Enter two numbers to multiply", "5 10");
        numb = num.split(" ");
        console.log(`${numb[0]} * ${numb[1]} = ${+numb[0] * +numb[1]}`);
        break;
    case "/":
        var num = prompt("Enter two numbers to divide", "100 10");
        numb = num.split(" ");
        console.log(`${numb[0]} / ${numb[1]} = ${+numb[0] / +numb[1]}`);
        break;
    case "sq":
        var num = prompt("Enter a number to find the square root of", 25);
        console.log(`The square root of ${num} is ` + Math.sqrt(Number(num)));
        break;
    case "%":
        var num = prompt("Enter two numbers to find the percentage of.\nEx: 50% of 100", "50 100");
        numb = num.split(" ");
        var percent = (numb[0] / 100) * numb[1];
        console.log(`${numb[0]}% of ${numb[1]} is ${percent}`);
        break;
    default:
        console.log("Invalid Input");
        break;
}