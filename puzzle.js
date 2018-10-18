class Puzzle {
  constructor(puzzleBankIndex, category, answer) {
    this.category = category || '';
    this.answer = '';
    this.letters = 0;
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
    this.numberOfWords = puzzleBankIndex + 1;
    console.log(this);
    if (round.currentRound !== 4) {
      domUpdates.displayPlayerTurn();
      domUpdates.highlightAvatarTurn();
    }
  }

  checkGuess(event) {
    event.preventDefault();
    let playerGuess = $('.solve-input').val().toLowerCase();
    if (playerGuess === puzzle.answer) {
      $('.player-turn-display').text(`You Solved it!!`);
      round.currentPlayer.cumulateTotalScore(round.currentPlayer.roundScore);
      for (var i = 0; i < puzzle.answer.length; i++) {
        var tiles = $('.game-board-box');
        var letter = puzzle.answer.charAt(i);
        $(tiles[i]).addClass('correct-letter');
        $(tiles[i]).text(letter.toUpperCase());  
      }
      setTimeout(() => {
        if (round.currentRound === 4) {
          round.createBonusRound();
          let playersObj = [player1, player2, player3];
          let highestScore = Math.max(player1.totalScore, player2.totalScore, player3.totalScore);
          var winningPlayer = playersObj.find((player) => {
            return player.totalScore === highestScore;
          });
          domUpdates.hideNonWinningPlayers(winningPlayer);
          bonusRound = new BonusRound();
          bonusRound.newRound();
          wheel.generateBonusWheel();
          domUpdates.displayBonusRoundInstructions(winningPlayer);
        }
          else {
          round.newRound();
        }
        
      }, 3000);
      
    } else {
      //go to next player
      $('.player-turn-display').text('That is Incorrect!');
      setTimeout(() => {
        //display it is next players turn
        round.changePlayer();
        round.displayCurrentPlayerTurn();
        round.highlightCurrentPlayerTurn();
      }, 2000);
    }
    $('.solve-button-form').addClass('hidden');
    domUpdates.clearGuessInput();
  }
}

class bonusPuzzle extends Puzzle {

}

if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}