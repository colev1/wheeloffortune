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

    solvePuzzle() {
    //check if input field is equal to the puzzle
    
    //if true, round = new round; puzzle = new puzzle(),
    }
	
}


if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}