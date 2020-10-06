/****************************************
 * Basic math operators
 */

// Set variable values

var firstName, lastName;
firstName = 'John';
lastName = 'Smith';
fullName = firstName + ' ' + lastName;
person1 = fullName;

firstName = 'Mark';
lastName = 'Bennet';
fullName = firstName + ' ' + lastName;
person2 = fullName

// Calculate a user's birth year by subtracting their age from current year
var ageJohn = 28;
var ageMark = 33;
var currentYear = 2020;
// John and Mark's birth years
johnBirthYear = currentYear - ageJohn;
markBirthYear = currentYear - ageMark;

// Print birth year, age in 10 years and each person's age half their lifetime ago
console.log(person1, 'was born in', johnBirthYear, 'and', person2, 'was born in', markBirthYear);
console.log(person1 + "'s age in 10 years will be", ageJohn + 10 + '.', person2 + "'s", 'will be', ageMark + 10 + '.');
console.log(person1, 'was', ageJohn / 2 + ' years old, half his lifetime ago and', person2, 'was', ageMark / 2 + '.');

/****************************************
 * Logical operators
 */

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

/****************************************
 * typeof operators
 */

// johnOlder is a boolean
console.log(typeof johnOlder);
console.log(typeof ageMark);  // numbers are always floats in JavaScript even if they don't display a decimal
console.log(typeof 'This is a string type');
var x;
console.log(typeof x);
