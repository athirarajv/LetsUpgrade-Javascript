// console.log("Grading system");
// Use Conditional statements. Also the same code using switch or ternary.
let marks = Number(prompt("Enter your marks", 50))

/* Using Condtional Statements

let gradingSystem = function(marks=0){
    if (marks >= 90)
        return "A"     
    else if (marks >= 80)
        return "B" 
    else if (marks >= 70) 
        return "C"
    else if (marks >= 60)
        return "D"
    else
        return "F"
}

let grade = gradingSystem(marks);
console.log(`The marks entered is ${marks} and grade is ${grade}`);

*/

/* Using Switch case

m = marks/10;
let gradingSystem = function(marks=0){
switch(m){
    case 9:
        return "A";
        break;
    case 8:
        return "B";
        break;
    case 7:
        return "C";
        break;
    case 6:
        return "D";
        break;
    default:
        return "F";
        break;
}
}

let grade = gradingSystem(marks);
console.log(`The marks entered is ${marks} and grade is ${grade}`);
*/

// Using ternary operator
let grade = (marks >= 90) ? 'A':
            (marks >= 80) ? 'B':
            (marks >= 70) ? 'C':
            (marks >= 60) ? 'D':
            'F';

console.log(`The marks entered is ${marks} and grade is ${grade}`);