// console.log("Odd or even");

let num = Number(prompt("Enter a number", 0));

let oddeven = function(num=0){
    if(num%2 == 0)
        return "even"
    else
        return "odd"
} 

let result = oddeven(num);

console.log(`The number entered is ${num} and number is ${result}`);