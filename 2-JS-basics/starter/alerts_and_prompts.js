/****************************************
 * Alerts and prompts create popups in the browser which require user interaction
 *
 * Alerts simply display a popup with a message that must be closed
 * Prompts allow the user to enter a value which can be stored in a variable
 */

// Create an alert popup
var alertMessage = 'Alert popup successfully created! Please press OK below to continue.';
// The page will keep loading and won't proceed until OK is pressed
alert(alertMessage);

// Prompt allows the user to input a value which can be saved
var typeOK = prompt('Please type "OK"')
console.log(typeOK)