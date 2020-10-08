/****************************************
 * Switch statements
 *
 * This operator also has 3 parts
 * 1. The variable being tested
 * 2. Two (2) or more cases to be tested, with an action for each
 * 3. A 'default' case to be performed if all above cases are false
 */

var firstName = 'John'
var job = '';
switch (job) {  // using job's value
    case 'teacher':  // if the value is 'teacher'
        console.log(firstName + ' is a teacher.');  // do this
        break  // requires a break statement or it will keep evaluating the same thing
    case 'driver':  // if the value is 'driver'
        console.log(firstName + ' is an Uber driver.');  // then do this
        break
    case 'designer':
        console.log(firstName + ' designs websites.');
        break
    default:  // if none of the above are true, do this by default
        console.log(firstName +"'s job is not stored anywhere.")  // default case does not require a break
}