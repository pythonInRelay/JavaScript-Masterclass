/****************************************
 * Ternary operator
 *
 * This operator has 3 parts
 * 1. The condition
 * 2. The if block
 * 3. The else block
 */

var firstName = 'John';
var age = 16;

// Ternary operator
// Age >= 18 is the condition
age >= 18 ? console.log(firstName + ' drinks beer.')  // after the ? is if block
    : console.log(firstName + ' is too young to drink alcohol.');  // after the : is the else block

// if age is 18 or above 'beer' is printed, else 'juice' is printed
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);  // juice

/* now the LONG way using a whole if/else block
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';  // have to repeat the same declaration again too
}*/