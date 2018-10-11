
// const game = new Game;




$('.start-game-button').on('click', hideWelcomeMessage);

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
