// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array from letters
let lettersArray = Array.from(letters);

// Select Letters Container
let lettersConainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letters =>
  {
    // Create Span
    let span = document.createElement("span");

    // Create Letter Text Node
    let theLetter = document.createTextNode(letters);
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
    
}