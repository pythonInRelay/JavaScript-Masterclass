/****************************************
 * A list of variable types and how they are used in JS including var, const, let etc.
 */

// How to print to the console in JS
console.log('Hello World!!!');

// Different ways to assign variables

// We can define them first like below
var firstName, lastName;

// Then give them a value (we don't need var again here)
firstName = 'John';
lastName = 'Smith';

// Or we can simply give them a value immediately after defining
var age = 28;
var fullAge = true;
var job = 'Teacher';

// Printing out multiple values and using operators in the console
// all variables, even bool will be coerced into strings automatically
console.log(firstName, lastName + '.', 'Age =', age, 'Is adult? =', fullAge, 'Job = ' + job);

// Types in JavaScript

// var lets JavaScript assign the type dynamically
var canBeAnythingYouWant;

// const variables must have some sort of value like a string or number
const variableName = 'MustHaveADeclaredValue';

// let keywords can have block scope only unlike var
// also they do not require an assigned value, the same as var

{
    let something;
    console.log(something);  // undefined
}
// 'let something;' cannot be used here. var something; could be used here
// console.log(something)  // Uncaught ReferenceError: something is not defined