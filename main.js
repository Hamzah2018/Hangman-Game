// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array from letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersConainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letter => {
  // Create Span
  let span = document.createElement("span");

  // Create Letter Text Node
  let theLetter = document.createTextNode(letter);
  // Append The Letter to Span
  span.appendChild(theLetter);
  // Add Class on Span
  span.className = 'letter-box';
  // Append Span to The Letters Container
  lettersConainer.appendChild(span);
}
);

// Object of Words + Categories
const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "c", "mysql", "python"],
  movies: ["Avatar", "Titanic", "aftersun", "angryman", "goodfellas", "plan"],
  people: ["Hamzah Ismail", "Cristiano Ronaldo", "Will Smith", "Dwayne Johnson", "Elon Musk", "William Gates", "Jeffrey Bezos"],
  countries: ["Yemen", "Palestine", "Syria", "Egypt", "Tunisia", "Algeria"]
}

// Get Random Property
let allKeys = Object.keys(words);
// Random Number Depend On Keys Lenght
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Category  name
let randomPropName = allKeys[randomPropNumber];
// console.log(randomPropName);
// Category element Depend in name
let randomPropValue = words[randomPropName];
// console.log(randomPropValue);
// Random Number Depend on Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
// The Value 
let randomValueValue = randomPropValue[randomPropNumber];

// console.log(randomPropValue);
// console.log(randomValueNumber);
// console.log(randomValueValue);

document.querySelector(".game-info .category span").innerHTML = randomPropName;

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen word to Array
let lettersAndSpace = Array.from(randomValueValue);
console.log(lettersAndSpace);
// Create Spans Depend on Word
lettersAndSpace.forEach(letter => {
  let emptySpan = document.createElement("span");
  // If Letter is Space
  if (letter === ' ') {
    // Add Class to Span
    emptySpan.className = 'has-space';
  }
  // Append Spans to The Letters Guess Container
  lettersGuessContainer.appendChild(emptySpan);
});
// Select Guss Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempt
let wrongAttempts = 0;
// Select The Draw Element
let theDraw = document.querySelector(".hangman-draw");
// handle Clicking on letters
document.addEventListener("click",
  (e) => {
    if (e.target.className === 'letter-box') {
      e.target.classList.add("clicked");
      // Set The Chose Status
      let theStatus = false;
      // Get Clicked Letter
      let theClickedLetter = e.target.innerHTML.toLowerCase();
      // The chosen word
      let theChosenWord = Array.from(randomValueValue.toLowerCase());

      theChosenWord.forEach((wordletter, wordIndex) => {

        if (theClickedLetter == wordletter) {

          // Set Status to Correct
          theStatus = true;
          // Loop on All Guess Spans
          guessSpans.forEach((span, spanIndex) => {
            if (wordIndex === spanIndex) {
              span.innerHTML = theClickedLetter;
            }
          }
          );
        }
      });
      //  Outside 
      // console.log(theStatus);
      // If Letter is Wrong
      if (theStatus !== true) {
        // Increase The Wrong Attempts
        wrongAttempts++;
        // Add Class Wrong on The Draw Element
        theDraw.classList.add(`wrong-${wrongAttempts}`);
        // Play Fail Sound
        document.getElementById("fail").play();
        if (wrongAttempts == 8) {
          endGame();
          lettersConainer.classList.add("finished");
        }
      }
      else {
        // playe Suscce Sound
        document.getElementById("success").play();
      }
    }
  }
);
// End Game Function
function endGame() {
  // Create Popup Div
  let div = document.createElement("div");
  let divText = document.createTextNode(`Game Over, The word is ${randomValueValue}`);
  div.appendChild(divText);
  div.className = 'popup';
  document.body.appendChild(div);
}