/****************************************
 * Bool Logic
 *
 * Determining which statement to print based on truthiness
 */

var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age > 12 && age < 20) {  // Age between 13 and 12
    console.log(firstName + ' is a teenager.');
} else if (age > 20 && age < 30) {
        console.log(firstName + ' is a young man.')
} else {
    console.log(firstName + ' is a man.');
}
