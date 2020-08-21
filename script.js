let gameContainer = document.querySelector('.gameContainer');
let figureContainer = document.querySelector('.figure-container');
let figurePart = document.querySelector('.figure-part');
let answerDiv = document.querySelector('.answerDiv');
let dashes = document.querySelector('.dashes');
let wrongLettersContainer = document.querySelector('.wrongLettersContainer');

let guessedLetters = new Set();
let wrongLetters = new Set();
let count = 0;

let animals = ['bear', 'giraffe', 'tiger', 'elephant', 'lion', 'dog', 'fox'];
let i = 0 , j = 0 ; 
let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  for(i = 0; i < randomAnimal.length ; i++) {
      entryDash = document.createElement('div');
      entryDash.classList.add('entryDash');
      entryDash.innerHTML = ' _ ';
      dashes.appendChild(entryDash);
  }
  document.addEventListener('keypress', function(e) {
     if( Array.from(guessedLetters).includes(e.key)) {
       alert(`The letter "${e.key}" has been already guessed!`);

     }
     else {
       guessedLetters.add(e.key);
       if (randomAnimal.includes(e.key) ) {
         console.log('true');
         for(j = 0; j < randomAnimal.length; j++) {
           if(randomAnimal[j] === e.key) {
             entryDash[j].innerText = e.key;          
           }
         }

       }
       else {
         console.log('false');
       }
     }
      
  });




