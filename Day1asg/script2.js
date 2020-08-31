//var - var is function scoped
var lang = "Javascript";
// This has global scope
console.log(lang)
var x = 15; //global scope
console.log(x);
{
    x++;
    console.log(x);
} /*the scope of the variable 'x' is global, which means that 'x' is recognized within block*/

//let - let is block scoped
// This is limited to the “block” defined by curly braces {} 
{
    let a=10;
    console.log(a);
} //block 1 - no error
{
     a++;
     console.log(a);
} //block 2 - error
// We will get an error as variable 'a' is not recognized in block2

//const - const is block scoped

{
    const PI=3.14;
    console.log(PI);
} //block 1
{
     console.log(PI);
} //block 2 - error
/* Scope of "PI" is limited to block 1 and "PI" is not recognized in block 2 */
const name = "John";
console.log(name);
name = "Harry"; 
// const cannot be re-assigned to a new value - error
console.log(name);

