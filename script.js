
// const game = new Game;




$('.start-game-button').on('click', hideWelcomeMessage);
$('.start-game-button').on('click', createNewGame);







function createNewGame() {
  round = new Round();
  game = new Game(round);
  game.startGame();

  player1 = new Player();
  player2 = new Player();
  player3 = new Player();
}



//add event listeners to the player buttons, invoke their methods when clicked
//function selectedConsonantTurn('letter') {}



//function solve Puzzle() --> 
//check if input field is equal to the puzzle
//if true, round = new round; puzzle = new puzzle(),

//spin wheel function should call class wheel
//call method wheel.spin to get value
//if wheelvalue does not equal bankrupt or skip turn, then player can guess a letter
//player guesses letter --> check if letter is in puzzle (puzzle.checkLetter('letter'))

function hideWelcomeMessage(event) {
  event.preventDefault();
  $('.welcome-message').hide();
}


const letters = ("abcdefghijklmnopqrstuvwxyz").toUpperCase();


$.each((letters) => {
    let letterButton = $('<button class="letters">' + value.name + "</button>");
    $("#letter-bank-container").append(letterButton);
});
console.log(letters);



// game.startGame() 
//add puzzleAnswer to puzzle constructor
