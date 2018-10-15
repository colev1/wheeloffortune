class Puzzle {
	constructor(puzzleBankIndex, category, answer) {
    // this.puzzleBankIndex = puzzleBankIndex;
    this.category = category || '';
	}

  selectPuzzleBank(puzzleBankIndex) {
      puzzle.generateNewPuzzle(puzzleBankIndex);
      domUpdates.displayPuzzleCategory();
      domUpdates.displayPuzzleBoard();
    }

	generateNewPuzzle(puzzleBankIndex) {
    let puzzleBankArray = [ 'one_word_answers', 'two_word_answers', 'three_word_answers', 'four_word_answers'];
    var puzzleBankofGame = puzzleBankArray[puzzleBankIndex];
    var chosenBankArray = data.puzzles[puzzleBankofGame].puzzle_bank;
    var selectedPuzzle = chosenBankArray[Math.floor(Math.random() * chosenBankArray.length)];
    this.category = selectedPuzzle.category;
    this.letters = selectedPuzzle.total_number_of_letters;
    var answer = selectedPuzzle.correct_answer.toLowerCase().replace(/-/g, " ").replace(/&/g, "and");
    this.answer = answer;
    this.numberOfWords = puzzleBankIndex+1;
    console.log(this);
	};

    checkGuess(event) {
    //check if input field is equal to the puzzle
    // if ()
    //if true, round = new round; puzzle = new puzzle(),
    event.preventDefault();
    let playerGuess = $('.solve-input').val().toLowerCase();
      if (playerGuess === puzzle.answer) {
      console.log('You solved it!');
      // createNewRound();
      // puzzle = new Puzzle();
      // puzzle.generateNewPuzzle(puzzleBankIndex);
      
      //displays guess when the puzzle is solved 
      for (var i=0; i<puzzle.answer.length; i++) {
           var tiles = $('.game-board-box');
           var letter = puzzle.answer.charAt(i);
            $(tiles[i]).addClass('correct-letter');
            $(tiles[i]).text(letter.toUpperCase());
          
        }
      } else {
      console.log('Wrong!');
      //go to next player
      }
      $('.solve-button-form').addClass('hidden');
      }
}  



if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}