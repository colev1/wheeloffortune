
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
      if (puzzle.answer.includes(letter)) {
        $(event.target).addClass('chosen-letter'); 

      }
    },
  displayVowels(event) {
    event.preventDefault();
    $('.vowel-popup').removeClass('hidden');
  },

  displaySolveInput(event) {
    event.preventDefault();
    $('.solve-button-form').removeClass('hidden');
  },

  displayPuzzleBoard() {
    var tiles = $('.game-board-box');
    for (var i=0; i<puzzle.answer.length; i++) {
      if (puzzle.answer.charAt(i) !== ' ') {
        $(tiles[i]).addClass('greyed');
      }
    }
  }
}






if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}