console.log("LetsUpgrade JS Assignment : Day4 - Question 2");

// Given object
const student = {
    name : "Helsinki",
    age : 24,
    projects : {
        diceGame : "Two player dice game using Javascript",
    }
}

// Destructuring the object
const {name, age, projects:{diceGame}} = student;

// Printing the object
console.log(name, age, diceGame);
console.log(`The name is ${name}. Age is ${age}. The project is a ${diceGame}.`);