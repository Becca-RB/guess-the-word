const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const inputGuess = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const guessMessage = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again-hide");
const word = "magnolia";
const guessedLetters = [];

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
    guessMessage.innerText ="";
    const inputValue = inputGuess.value;
    const guessTried = validatePlayerInput (inputValue);
    
if (guessTried) { makeGuess(inputValue);
}

    inputValue.value = "";
    });


const validatePlayerInput = function (input){
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0){ guessMessage.innerText = "Enter a letter.";} 
    else if (input.length > 1) {guessMessage.innerText = "Just one letter, please!";}
    else if (!input.match(acceptedLetter)){
        guessMessage.innerText = "Enter only letters.";
    }
    else {
        return input;
    }
};

const makeGuess = function (inputValue){
    inputValue = inputValue.toUpperCase();
    if(guessedLetters.includes(inputValue)){
        guessMessage.innerText = "Oops! Already guessed that! Try again!";
    }
    else { guessedLetters.push(inputValue);
    console.log(guessedLetters);
    updateLetterGuesses();
    updateWordProgress(guessedLetters);
}
    };

    const updateLetterGuesses = function (){
        guessedLettersElement.innerHTML = "";
        for (const placeholder of guessedLetters){
        const list = document.createElement("li");
        list.innerText = placeholder;
        guessedLettersElement.append(list);
        }
    };

    const updateWordProgress = function (guessedLetters){
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    //console.log(wordArray);
    const showWord = [];
    for (const placeholder of wordArray){
        if (guessedLetters.includes(placeholder)){
            showWord.push(placeholder.toUpperCase());
        }
        else {showWord.push("●");
    }
    }
    wordInProgress.innerText = showWord.join("");
    checkPlayerWin();
    };

    const checkPlayerWin = function () {
        if (word.toUpperCase() === wordInProgress.innerText){
            guessMessage.classList.add("win");
            guessMessage.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`;
        }
    };

