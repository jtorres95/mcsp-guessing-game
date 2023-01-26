/*Random Number generator between 1-100 */ 
const secret = Math.floor(Math.random() * 100);
console.log(secret);
/*Name submission. Only asks once */
let user = prompt(
  "Hello! For federal record keeping purposes please enter your full legal name as it appears on your social security card."
);
/* First guess */
let input = prompt(
  `${user}, you have been added to the no fly list. Guess a number between 1-100 to cancel submission.`
);
/* Refines user input to ensure an integer is taken from input    */
let refined = parseInt(input);
/* Confirmation of user name and input being inserted */
console.log(`${user} input ${refined}`);



function init() {
    /*Counter to be displayed after guessing correct*/
    let guessCounter = 0;
    let guessHistory = [];
  if (refined === secret) {
    /*Guess is correct on the first try  */
    alert("Good job! You guessed correctly on the first try.");
  } else {
    while (refined !== secret) {
    /*guessCounter increments by 1 for each time the while loop is run*/    
        guessCounter++;
        guessHistory.unshift(refined)
        refined = parseInt(input);
        console.log(`Inside while loop ${refined}`)
      if (Number.isInteger(refined) == false) {
        /*Counter to be displayed after guessing correct*/
        /*Check to see if number cannot be derived from user input*/
        input = prompt(`Sorry ${user}, that's an invalid number. Please enter a valid number to cancel your submission to the no fly list.`);
      } else if (refined < secret) {
        input = prompt(`Your guess was too low, ${user}. Please guess again to cancel your submission to the no fly list.`);
      } else if (refined > secret) {
        input = prompt(`Your guess was too high, ${user}. Please guess again to cancel your submission to the no fly list.`);
      } else {   
        return alert(`Good job ${user}. You guessed correctly in ${guessCounter} tries. Your submission to the no fly list has been canceled. Here's a list of your wrong guesses in reverse order: ${guessHistory}`);
        
      }
    }
  }
}

init();