
// const game = new Game;




$('.start-game-button').on('click', hideWelcomeMessage);
$('.start-game-button').on('click', createNewGame);
// $('.start-game-button').on('click', displayCategory);
$('.spin-button').on('click', spinWheel);
$('.solve-button').on('click', displaySolveInput)

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

// generate puzzle bank for 
function selectPuzzleBank(puzzleBankIndex) {
  puzzle = new Puzzle();
  puzzleBankArray = [ 'one_word_answers', 'two_word_answers', 'three_word_answers', 'four_word_answers'];
    var puzzleBankofGame = puzzleBankArray[puzzleBankIndex];
    var chosenBankArray = data.puzzles[puzzleBankofGame].puzzle_bank;
    var selectedPuzzle = chosenBankArray[Math.floor(Math.random() * chosenBankArray.length)];
    puzzle.generateNewPuzzle(selectedPuzzle);
    puzzle.displayPuzzleCategory();
}

function spinWheel() {
  wheel.spinWheel();
}
 
 //if the value of the wheel is bankrupt, score of player is 0;
  //moves on to next player
  //if the value of the wheel is lose a turn, the player turn is over, moves to next playe 

//add event listeners to the player buttons, invoke their methods when clicked
//function selectedConsonantTurn('letter') {}


//spin wheel function should call class wheel
//call method wheel.spin to get value
//if wheelvalue does not equal bankrupt or skip turn, then player can guess a letter
//player guesses letter --> check if letter is in puzzle (puzzle.checkLetter('letter'))

function hideWelcomeMessage(event) {
  event.preventDefault();
  $('.welcome-message').hide();
}

function displaySolveInput(event) {
  event.preventDefault();
  $('.solve-button-form').removeClass('hidden');
}

$('.submit-guess-button').on('click', checkGuess);

function checkGuess(event) {
  event.preventDefault();
  let playerGuess = $('.solve-input').val().toLowerCase();
  puzzle.checkGuess(playerGuess);
}

$('.vowel-button').on('click', checkVowel);

function checkVowel(e, target) {
  e.preventDefault();
  puzzle.checkVowel(target);
}

// $('.')

function checkLetter() {

}


// game.startGame() 
//add puzzleAnswer to puzzle constructor
