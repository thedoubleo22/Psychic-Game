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
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j", "k", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"]
var winScore = 0
var lossScore = 0
var guessLeft = 10
var letterIndex;
var letterGenerator;


//Chapter 2 Functions
function winFunction() {
	return document.getElementById("wins").innerHTML = winScore
}

function loseFunction() {
	return document.getElementById("lose").innerHTML = lossScore
}

function guessLeftFunction() {
  return document.getElementById("left").innerHTML = guessLeft
}

function reset() {
	document.getElementById("guess").innerHTML = ""
	guessLeft = 10;
	guessLeftFunction()
    letterIndex = Math.floor(Math.random() * letter.length);
    letterGenerator = letter[letterIndex]
}

winFunction()
loseFunction()
reset()

//Chapter 3 User Interactions - Events
document.onkeyup = function(event) {
    var userChoice = event.key.toLowerCase();

    if (userChoice === letterGenerator) {
        winScore++
        winFunction()
        reset()
    } else {
        guessLeft--
        guessLeftFunction()
        document.getElementById("guess").innerHTML += (userChoice + ", ")

        if (guessLeft === 0) {
        	lossScore++
        	loseFunction()
        	reset()
        }
    }
}