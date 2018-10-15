
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
        $(event.target).hide(); 
      }
    },
  displayVowels(event) {
    event.preventDefault();
    $('.vowel-popup').removeClass('hidden');
  },

  displaySolveInput(event) {
    event.preventDefault();
    $('.solve-button-form').removeClass('hidden');
}

}






if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}