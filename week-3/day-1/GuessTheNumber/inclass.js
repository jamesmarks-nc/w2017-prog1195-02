var number;

function pickANumber() {
    // Pick a number between 1 and 10
    return Math.floor(Math.random() * 10) + 1;
}

function guessNumber() {
    // Get user input
    var guessTextbox = document.getElementById('txtUserGuess');
    // Get ouput textbox
    var outputDiv = document.getElementById('divUserFeedback');

    var guess = parseInt(guessTextbox.value);
    //var number = pickANumber();
    var output = "";

    if(isNaN(guess)) {
    	output = "That wasn't a number. Please type integers.";
    } else if(guess == number) {
    	output = "Correctly guessed " + guess;
    	output = output + " Generating a new random number.";
    	number = pickANumber();
    } else if(guess < 1 || guess > 10) {	
		output = 'Please enter a number between 1 and 10.';
    } else if(guess < number) {
		output = "too low";
	} else if(guess > number) {
		output = 'too high';
	}

	outputDiv.innerText = output;


}

number = pickANumber();







