/*Data types in Javascript:
Numbers, String, Boolean, Null, Undefined, Object*/

// String data type - used to represent textual data
var a = "Hello World";
console.log("String data type - ",a);

/* Number data type - used to represent positive or negative numbers with or without decimal place, or numbers written using exponential notation*/
var a = 25; b = 80.5; c = 4.25e+6;
console.info("Number data type - ", a, ", ", b, ", ", c)

// Boolean data type -  can hold only two values: true or false
var isWriting = false;
console.log(isWriting)
var a = 2, b = 5, c = 10;
console.log(b > a) // Output: true
console.log(b > c) // Output: false

/* Undefined data type - if a variable has been declared, but has not been assigned a value, it has the value undefined*/
var x;
var y = "Hello World!"
console.log(x) // Output: undefined
console.log(y) // Output: Hello World!

/* Null Data Type - It can have only one value-the null value. A null value means that there is no value*/
var n = null;
console.log(n); // Output: null

// Object Data Type - allows you to store collections of data
var person = {name: "Dan", surname: "Brown", age: 45};
console.log(person);