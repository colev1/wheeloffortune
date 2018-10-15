class Puzzle {
	constructor(puzzleBankIndex, category, answer) {
    this.puzzleBankIndex = puzzleBankIndex;
    this.category = category || '';
	}

	generateNewPuzzle(puzzleBankIndex) {
    let puzzleBankArray = [ 'one_word_answers', 'two_word_answers', 'three_word_answers', 'four_word_answers'];
    var puzzleBankofGame = puzzleBankArray[puzzleBankIndex];
    debugger;
    var chosenBankArray = data.puzzles[puzzleBankofGame].puzzle_bank;
    var selectedPuzzle = chosenBankArray[Math.floor(Math.random() * chosenBankArray.length)];
    this.category = selectedPuzzle.category;
    this.letters = selectedPuzzle.total_number_of_letters;
    this.answer = selectedPuzzle.correct_answer.toLowerCase();
	};



  displayPuzzleBoard () {
  for (var i=0; i < this.answer.length; i++) {
    console.log(this.answer.charAt(i));
    if (this.answer.charAt(i) === "a") {
    console.log('hi');
    }
  }
}

    checkGuess(playerGuess) {
    //check if input field is equal to the puzzle
    // if ()
    //if true, round = new round; puzzle = new puzzle(),
      if (playerGuess === puzzle.answer) {
      console.log('You solved it!');
      puzzle = new Puzzle();
      } else {
      console.log('Wrong!');
      }
      $('.solve-button-form').addClass('hidden');
      }
}  



if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}