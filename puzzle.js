class Puzzle {
	constructor(puzzleBankIndex, category) {
    this.puzzleBankIndex = puzzleBankIndex;
    this.category = category || '';
	}

	generateNewPuzzle(selectedPuzzle) {
    
    // var puzzleBankArray = [ 'one_word_answers', 'two_word_answers', 'three_word_answers', 'four_word_answers' ];
    // console.log(data);
    // var puzzleBankofGame = puzzleBankArray[puzzleBankIndex];
    // var chosenBankArray = data.puzzles[puzzleBankofGame].puzzle_bank;
    // var selectedPuzzle = chosenBankArray[Math.floor(Math.random() * chosenBankArray.length)];
    this.category = selectedPuzzle.category;
    debugger;
    return selectedPuzzle;
	}

	displayPuzzleCategory(category) {
		//target category section on HTML
    //display category on page

	}
	
}


if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}