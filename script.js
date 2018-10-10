// const game = new Game;



$('.start-game-button').on('click', hideWelcomeMessage);

function hideWelcomeMessage(event) {
  event.preventDefault();
  $('.welcome-message').addClass('hidden');
}

// game.startGame();
