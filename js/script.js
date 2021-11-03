// The unordered list where the player’s guessed letters will appear.
const guessedLetters = document.querySelector(".guessed-letters");

// The button with the text “Guess!” in it.
const guessButton = document.querySelector(".guess");

// The text input where the player will guess a letter.
const letterInput = document.querySelector(".letter");

// The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");

// The paragraph where the remaining guesses will display.
const guessesRemaining = document.querySelector(".remaining");

// The span inside the paragraph where the remaining guesses will display.
const span = document.querySelector(".remaining span");

// The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector("message");

// The hidden button that will appear prompting the player to play again.
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

//Write a function to add placeholders for each letter

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        //console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join ("");
};
placeholder(word);

//Add an event listener for the button

guessButton.addEventListener ("click", function (e) {
    e.preventDefault();
    //empty message element text
    message.innerText = "";
    const guess = letterInput.value;
    //console.log(guess);
    //make sure it's a single letter
    const goodGuess = inputValidate(guess);

    if (goodGuess) {
        //We've got a letter!  Let's guess!
        makeGuess(guess);
    }
    letterInput.value = "";
});

//Create a Function to Check Player's Input

const inputValidate = function (letterInput) {
    const acceptedLetter = /[a-zA-Z]/;
    if (letterInput.length ===0) {
        //if input is empty
        message.innerText = "Please enter a letter.";
    } else if (letterInput.length >1) {
        //if input is more than one letter
        message.innerText = "Please enter a single letter.";
    } else if (!letterInput.match(acceptedLetter)) {
        //did you type a number, special character, or other non-letter?
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        //Finally got a single letter!
        return letterInput;
    }
};
