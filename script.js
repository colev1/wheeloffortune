$('.start-game-button').on('click', domUpdates.hideWelcomeMessage);
$('.start-game-button').on('click', createNewGame);
$('.spin-button').on('click', spinWheel);
$('.solve-button').on('click', domUpdates.displaySolveInput);
$('.vowel-button').on('click', domUpdates.enableVowels);
$('.vowel').on('click', domUpdates.unhighlightVowels);
$('.letters').on('click', domUpdates.checkLetter);
$('.solve-input').on('keyup', domUpdates.enableSolveButton);
$('.quit-button').on('click', quitGame);

var wheel;
var round;
var player1;
var player2;
var player3;
var currentPlayer;
var game;
var bonusRound;

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
  if (round.currentRound !== 5) {
    domUpdates.disableVowels();
    domUpdates.disablePlayerButtons();
    let newWheelValue = wheel.spinNewWheel();
    wheel.displayWheelValue();
    if (newWheelValue === 'BANKRUPT') {
      round.currentPlayer.scoreBankrupt();
      domUpdates.disableVowels();
      domUpdates.disableConsonants();
      setTimeout(() => { 
        round.changePlayer();
        round.highlightCurrentPlayerTurn(); 
        round.displayCurrentPlayerTurn();
        domUpdates.enablePlayerButtons();
      }, 1600);
    }
    if (newWheelValue === 'LOSE A TURN') {
      domUpdates.disableVowels();
      domUpdates.disableConsonants();
      setTimeout(() => {
        round.changePlayer();
        round.highlightCurrentPlayerTurn(); 
        round.displayCurrentPlayerTurn();
        domUpdates.enablePlayerButtons();
      }, 1600);
    }
    //bonus round 
  } else {
    let newWheelValue = wheel.spinNewWheel();
    wheel.displayWheelValue();
    $('.vowel-button').prop('disabled', true);
    $('.spin-button').prop('disabled', true);
    domUpdates.enableBothVowelsConsonants();
  }
}

 function quitGame() {
  debugger;
    domUpdates.resetPuzzleBoard();
    domUpdates.resetRoundScores();
    domUpdates.resetTotalScore();
    createNewGame();
  };


$('.submit-guess-button').on('click', checkGuess);

function checkGuess(event) {
  event.preventDefault();
  puzzle.checkGuess(event);
  // domUpdates.checkGuess();
}



