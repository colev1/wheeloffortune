$('.start-game-button').on('click', domUpdates.hideWelcomeMessage);
$('.start-game-button').on('click', createNewGame);
$('.spin-button').on('click', spinWheel);
$('.solve-button').on('click', domUpdates.displaySolveInput);
$('.vowel-button').on('click', domUpdates.enableVowels);
$('.vowel').on('click', domUpdates.unhighlightVowels);
$('.letters').on('click', domUpdates.checkLetter);
$('.solve-input').on('keyup', domUpdates.enableSolveButton);

var wheel;
var round;
var player1;
var player2;
var player3;
var currentPlayer;
var game;

function createNewGame() {
  player1 = new Player(1);
  player2 = new Player(2);
  player3 = new Player(3);
  round = new Round(player1, player2, player3);
  wheel = new Wheel();
  puzzle = new Puzzle();
  wheel.generateWheelValues();
  puzzleBankIndex = Math.floor(Math.random() * 4);
  puzzle.selectPuzzleBank(puzzleBankIndex);
  domUpdates.enablePlayerButtons();
}

function spinWheel() {
  domUpdates.disableVowels();
  let newWheelValue = wheel.spinNewWheel();
  wheel.displayWheelValue();
  if (newWheelValue === 'BANKRUPT') {
    round.currentPlayer.scoreBankrupt();
    round.changePlayer();
    round.highlightCurrentPlayerTurn(); 
    round.displayCurrentPlayerTurn();
  }
  if (newWheelValue === 'LOSE A TURN') {
    round.changePlayer();
    round.highlightCurrentPlayerTurn(); 
    round.displayCurrentPlayerTurn();
  }
}

function createNewRound() {
  round = new Round()
  wheel = new Wheel();
  player1 = new Player();
  player2 = new Player();
  player3 = new Player();
  wheel.generateWheelValues();
  puzzleBankIndex = Math.floor(Math.random() * 4);
  selectPuzzleBank(puzzleBankIndex);

}
 


$('.submit-guess-button').on('click', checkGuess);

function checkGuess(event) {
  event.preventDefault();
  puzzle.checkGuess(event);
  // domUpdates.checkGuess();
}



