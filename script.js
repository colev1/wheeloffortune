// 
// const game = new Game;
$('.start-game-button').on('click', domUpdates.hideWelcomeMessage);
$('.start-game-button').on('click', createNewGame);
$('.spin-button').on('click', spinWheel);
$('.solve-button').on('click', domUpdates.displaySolveInput);
$('.vowel-button').on('click', domUpdates.highlightVowels);
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
  let newWheelValue = wheel.spinNewWheel();
  wheel.displayWheelValue();
  if (newWheelValue === 'BANKRUPT') {
    round.currentPlayer.scoreBankrupt();
    round.changePlayer();
  }
  if (newWheelValue === 'LOSE A TURN') {
    round.changePlayer();
    // player.nextPlayer(); - Need to determine
    //how we move through the players and where that lives
    //Recommend either Game or round class
  }
}

  // function displayRoundScore() {
  //   // know in this function, which player scored
  //   // player-1, player-2, player-3

  //   // article player-${this.name} interpolate

  //   // this.name = 1|2|3
  //   $('.round-money').text('$ ' + currentPlayer.roundScore());
  // }

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
 
 
//add event listeners to the player buttons, invoke their methods when clicked
//function selectedConsonantTurn('letter') {}


//if wheelvalue does not equal bankrupt or skip turn, then player can guess a letter
//player guesses letter --> check if letter is in puzzle (puzzle.checkLetter('letter'))

$('.submit-guess-button').on('click', checkGuess);

function checkGuess(event) {
  event.preventDefault();
  puzzle.checkGuess(event);
  // domUpdates.checkGuess();
}



// game.startGame() 
//add puzzleAnswer to puzzle constructor
