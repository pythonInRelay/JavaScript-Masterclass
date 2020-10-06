/****************************************
 * BMI Calculator
 */

var johnWeight = 70;  // kg
var johnHeight = 1.80;  // meters
var markWeight = 75;
var markHeight = 1.75;

var johnBMI = johnWeight / (johnHeight * johnHeight);  // BMI = mass / (height*height)
var markBMI = markWeight / (markHeight * markHeight);

var isHigher = johnBMI > markBMI;

console.log(johnBMI, markBMI, "\n", 'Is John\'s BMI higher than Mark\'s?', isHigher)