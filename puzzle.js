class Puzzle {
	constructor(puzzleBankIndex, category, answer) {
    this.puzzleBankIndex = puzzleBankIndex;
    this.category = category || '';
	}

	generateNewPuzzle(selectedPuzzle) {

    this.category = selectedPuzzle.category;
    this.letters = selectedPuzzle.total_number_of_letters;
    this.answer = selectedPuzzle.correct_answer.toLowerCase();
	}

	displayPuzzleCategory() {
    $('.category-display').text('Category: ' + puzzle.category);
	}

    checkGuess(playerGuess) {
    //check if input field is equal to the puzzle
    // if ()
    //if true, round = new round; puzzle = new puzzle(),
    if (playerGuess === puzzle.answer) {
        console.log('You solved it!')
    }
    else {
        console.log('Wrong!');
    }
    $('.solve-button-form').addClass('hidden');
    }
    // checkLetter(letter) {
    // if ()
    // }
}



if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}