/****************************************
 * If/ Else Statements
 */

// Version with string

var firstName = 'John';
var civilStatus = 'Married';

if (civilStatus === 'Married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not yet married.');
}

// Version with boolean

var isMarried = true;
if (isMarried) {  // Same as Python, statement is 'truthy' so does not need: === true
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not yet married.');
}

// More examples

var johnWeight = 70;  // kg
var johnHeight = 1.80;  // meters
var markWeight = 75;
var markHeight = 1.75;

var johnBMI = johnWeight / (johnHeight * johnHeight);  // BMI = mass / (height*height)
var markBMI = markWeight / (markHeight * markHeight);

if (johnBMI > markBMI) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
}

/* The old way without if/else statements

var isHigher = johnBMI > markBMI;
console.log(johnBMI, markBMI, "\n", 'Is John\'s BMI higher than Mark\'s?', isHigher
*/