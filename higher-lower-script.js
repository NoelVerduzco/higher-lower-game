let userCeil;

while ((isNaN(userCeil)) || (userCeil < 1)) {
    userCeil = Math.round(prompt("Please choose a number greater than 1."));
    // 1.1 Application prompts user for maximum number
    // 1.2 Application validates user input and does not allow invalid entries (negative numbers, zero, or non-numbers), reprompting user
    // 1.3 Application rounds decimal numbers
}

let randNum = Math.floor(Math.random() * userCeil) + 1;
// 1.4 Application selects a random number between 1 and N where N is the user-provided maximum number

let range = document.getElementById("range");
let content = document.createTextNode("Guess a number between 1 and " + userCeil);
range.appendChild(content);

let validGuesses = [];
// 3.1 Application initializes an array
let numString = "";

function do_guess(guess) {
    if (guess > randNum) {
        message.innerText = "Your guess is too high. Try a lower number.";
    }
    else if (guess < randNum) {
        message.innerText = "Your guess is too low. Try a higher number.";
    }
    else if (guess == randNum) {
        for (let i = 0; i < validGuesses.length; i++) {
            // 3.4 Application uses length property to iterate through list
            numString += validGuesses[i].toString() + ", ";
        }
        message.innerText = `You got it! It took you ${validGuesses.length} tries and your guesses were ${numString}`;
        // 3.3 Application correctly formats the win message to include the comma-delimited guesses as part of output
        // 3.5 Application does not use extra variable to count number of guesses i.e. app uses length of array to count number of guesses
    }
}

function validate() {
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");

    if (isNaN(guess) == true) {
        message.innerText = "That is not a number!";
        // 2.1 Application prevents user from guessing a non-number and displays appropriate error message
    }
    else if ((guess < 1) || (guess > userCeil)) {
        message.innerText = "That number is not in range. Please try again.";
        // 2.2 Application prevents user from guessing a number greater than the maximum and less than 1
    }
    else {
        if (validGuesses.find(entry => entry == guess) == undefined) {
            // 4.1 Before adding a guess, check the array using find()
            validGuesses.push(guess);
            // 3.2 Application uses push() to add the guesses to array
            do_guess(guess);
        }
        else {
            message.innerText = "This number has already been guessed. Try again."
            // 4.2 Display message that current guess has already been guessed
        }
    }
}