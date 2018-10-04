/* Psuedo Code
Variables: letters, used wins, losses, user guess, computer guess, guesses left.

Game Instructions
    - The user will have to guess what alphabetical letter the computer is thinking of. 
    - The user will enter a number and then the computer will generate a number.
    - If the user guesses correctly they will get 1 point.
    - If the user guesses incorrectly a number will be generated to guesses so far.
    - The user has 10 chances to guess. 
*/

//Chapter 1 Variable Initialization 

var letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0
var loss = 0
var guessLeft = 9
