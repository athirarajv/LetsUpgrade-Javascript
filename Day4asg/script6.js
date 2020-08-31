console.log("LetsUpgrade JS Assignment : Day4 - Question 6");

let num;

do {
  num = prompt("Enter a number greater than 100", 101);
} while (num <= 100 && num);
console.log("The number greater than 100 entered is " + num);