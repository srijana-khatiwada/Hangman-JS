let gameContainer = document.querySelector('.gameContainer');
let figureContainer = document.querySelector('.figure-container');
let figureParts = document.querySelectorAll('.figure-part');
let answerDiv = document.querySelector('.answerDiv');
let dashes = document.querySelector('.dashes');
let wrongLettersContainer = document.querySelector('.wrongLettersContainer');

// ----------setters------------
let guessedLetters = new Set();
let wrongLetters = new Set();
let rightLetters = new Set();
let count = 0;

let animals = ['bear', 'giraffe', 'tiger', 'elephant', 'lion', 'dog', 'fox'];
let i = 0 , j = 0 ; 
// -----------generating random animal-------------
let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  for(i = 0; i < randomAnimal.length ; i++) {
      entryDash = document.createElement('div');
      entryDash.classList.add('entryDash');
      entryDash.innerHTML = ' _ ';
      dashes.appendChild(entryDash);
  }

// -------to display figure parts----------------- 

function displayFigureParts() {
  let figures = Array.from(figureParts);
  // let counter = 0;
     figures[count].style.display = 'block';
    console.log(typeof(figures));
    console.log(figures.length);
}

// entry dash is a DOM element so put it in a variable!
let letters = document.querySelectorAll('.entryDash');

// -----------event listener to take entries----------

document.addEventListener('keypress', function(e) {

  if( Array.from(guessedLetters).includes(e.key)) {
    alert(`The letter "${e.key}" has been guessed already!`);
  }

  else {
    guessedLetters.add(e.key);
      if (randomAnimal.includes(e.key) ) {
      rightLetters.add(e.key);
      console.log('true');
        for(j = 0; j < randomAnimal.length; j++) {
          if(randomAnimal[j] === e.key) {
            letters[j].innerText = e.key; 
            checkWin();
          }
        }
      }

      else {
        wrongLetters.add(e.key);
        console.log('false'); 
        let wrongLetterDiv = document.createElement('h3');
        wrongLetterDiv.classList.add('wrongLetter');
        wrongLetterDiv.innerText = `${e.key} `;
        wrongLettersContainer.appendChild(wrongLetterDiv); 
        displayFigureParts();
        count++;
        checkLost();
     }
  }
});


  // ------------win and loss status popup-----------

function checkWin() {
  let win = Array.from(letters).every(box => {
    return box.innerText ? true : false;
  });

  if (win) {
    alert("winn");
  }
}
  

function checkLost() {
  if (count === 6) {
    alert(`You Lost. The correct answer is "${randomAnimal}". :P Click on try again to try again!`)
    document.addEventListener('keypress', function(e) {
      alert("Game is over. No entries will be accepted now!");
      wrongLettersContainer.style.display = 'none';
      dashes.style.display = 'none';
    });
  }
}



