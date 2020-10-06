/****************************************
 * f-Strings (Template Strings)
 *
 * For f-Strings to work you must use backticks instead `` otherwise the expression
 * will just be included in the string.
 */

let soMany = 10;
console.log(`This is ${soMany} times easier!`);  // backticks must be used instead!
// "This is 10 times easier!"

let name = 'Dean';
let age = '29';
console.log(`${name} is ${age} right now!`)
// "Dean is 29 right now!"