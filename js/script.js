const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const inputGuess = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const guessMessage = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again-hide");
const word = "magnolia";

const updateWords = function (word){
    const letterUpdate = [];
    for (const placeholder of word) {
        console.log(placeholder);
        letterUpdate.push("●");
    }
wordInProgress.innerText = letterUpdate.join("");
};

updateWords(word);


guessButton.addEventListener("click", function (e){
    e.preventDefault();
    inputValue = inputGuess.value;
    console.log(inputValue);
    inputValue.value = "";
});



