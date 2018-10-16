i
const domUpdates = {

  hideWelcomeMessage(event) {
    event.preventDefault();
    $('.welcome-message').hide();
  },

  displayPuzzleCategory() {
    $('.category-display').text('Category: ' + puzzle.category);
  },

  checkLetter(event) {
    let letter = event.target.id;
    $(event.target).addClass('chosen-letter');
    var tiles = $('.game-board-box');

    for (var i = 0; i < puzzle.answer.length; i++) {
      if (puzzle.answer.charAt(i) === letter) {
        $(tiles[i]).addClass('correct-letter');
        $(tiles[i]).text(letter.toUpperCase());
      }
    }
      if ($(event.target).hasClass('vowel')) {
        round.currentPlayer.roundScore -= 100;
        round.currentPlayer.displayRoundScore();
      } else {
      round.currentPlayer.incrementRoundScore(wheel.currentWheelElement);

    };
    round.changePlayer();
  },


  displaySolveInput(event) {
    event.preventDefault();
    $('.solve-button-form').removeClass('hidden');
  },

  displayPuzzleBoard() {
    var tiles = $('.game-board-box');
    for (var i = 0; i < puzzle.answer.length; i++) {
      if (puzzle.answer.charAt(i) !== ' ') {
        $(tiles[i]).addClass('greyed');
      }
    }
  },

  resetPuzzleBoard() {
    var tiles = $('.game-board-box');
    for (var i = 0; i < puzzle.answer.length; i++) {
      // if (puzzle.answer.charAt(i) !== ' ') {
        $(tiles[i]).removeClass('greyed');
        $(tiles[i]).text('');
    }
  },

  enablePlayerButtons() {
    $('.button').prop('disabled', false);
  },

  disablePlayerButtons() {
    $('.button').prop('disabled', true);
  },

  enableSolveButton() {
    if ($('.solve-input').val() === '') {
      $('.submit-guess-button').prop('disabled', true);
    } else {
      $('.submit-guess-button').prop('disabled', false);
    }
  },

  displayPlayerTurn() {
    $('.player-turn-display').text('Player 1.. your turn!');
    },

  highlightCurrentAvatarTurn() {
    $('.avatar').addClass('.highlight-avatar');
  },

  highlightVowels() {

    let vowels = $('.vowel');
    vowels.each(function()  {
      $(this).addClass('highlight-vowels');
    });

    let consonants = $('.letters').not('.vowel');
    consonants.each(function()  {
      $(this).addClass('inactive');
    });
  },

  unhilightVowels() {
    let vowels = $('.vowel');
    vowels.each(function()  {
      $(this).removeClass('highlight-vowels');
    });

    let consonants = $('.letters').not('.vowel');
    consonants.each(function()  {
      $(this).removeClass('inactive');
    });
  },

  resetLetters() {
    //change the styling of each letter back to the original once the puzzle is reloaded
    $('.letters').removeClass('chosen-letter');

  }

}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}