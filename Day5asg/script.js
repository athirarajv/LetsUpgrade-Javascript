console.log("LetsUpgrade JS Assignment : Day5 - Question 1");

var num = prompt("Enter positive numbers");
var arr = num.split(" ");
console.log("The entered numbers are: " + arr);

let odd = arr.filter(el=>el%2!=0);
let oddCubes = arr.filter(el=>el%2!=0).map(el=>Math.pow(el,3));

console.log("The odd numbers are: "+ odd);
console.log("The cubes of the odd numbers are: "+ oddCubes);
