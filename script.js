
// const game = new Game;




$('.start-game-button').on('click', domUpdates.hideWelcomeMessage);
$('.start-game-button').on('click', createNewGame);
// $('.start-game-button').on('click', displayCategory);
$('.spin-button').on('click', spinWheel);
$('.solve-button').on('click', domUpdates.displaySolveInput);
$('.vowel-button').on('click', domUpdates.displayVowels);
$('.vowels').on('click', domUpdates.checkLetter);
$('.letters').on('click', domUpdates.checkLetter);

var wheel;
var round;
var player1;
var player2;
var player3;
var game;


function createNewGame() {
  round = new Round();
  game = new Game(round);
  wheel = new Wheel();
  game.startGame();
  player1 = new Player();
  player2 = new Player();
  player3 = new Player();
  wheel.generateWheelValues();
  puzzleBankIndex = Math.floor(Math.random() * 4);
  selectPuzzleBank(puzzleBankIndex);
}

function selectPuzzleBank(puzzleBankIndex) {
  puzzle = new Puzzle();
  puzzle.generateNewPuzzle(puzzleBankIndex);
  domUpdates.displayPuzzleCategory();
}

function spinWheel() {
  let newWheelValue = wheel.spinNewWheel();
  wheel.displayWheelValue();

  if (newWheelValue === 'Bankrupt') {
    player1.scoreBankrupt();
  }
  if (newWheelValue === 'Lose a Turn') {
    player1.isTurn();
    // player.nextPlayer(); - Need to determine
    //how we move through the players and where that lives
    //Recommend either Game or round class
  }
}
 
 

//add event listeners to the player buttons, invoke their methods when clicked
//function selectedConsonantTurn('letter') {}


//spin wheel function should call class wheel
//call method wheel.spin to get value
//if wheelvalue does not equal bankrupt or skip turn, then player can guess a letter
//player guesses letter --> check if letter is in puzzle (puzzle.checkLetter('letter'))



$('.submit-guess-button').on('click', checkGuess);

function checkGuess(event) {
  event.preventDefault();
  let playerGuess = $('.solve-input').val().toLowerCase();
  puzzle.checkGuess(playerGuess);
}



// game.startGame() 
//add puzzleAnswer to puzzle constructor
