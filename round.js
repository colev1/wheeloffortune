class Round {
  constructor(player1, player2, player3, currentRound) {
    this.currentRound = currentRound || 1;	
    this.players = [player1, player2, player3];
    this.currentPlayer = player1;
    this.counter = 0;
    this.previousPlayer = player1;
  }

  changePlayer() {
    this.counter++;
    if (!this.players[this.counter]) {
      this.counter = 0;
      this.previousPlayer = this.currentPlayer
      this.currentPlayer = this.players[this.counter]
    } else {
      this.previousPlayer = this.currentPlayer;
      this.currentPlayer = this.players[this.counter]
    }
    domUpdates.enablePlayerButtons();
    domUpdates.clearSpinValueDisplay();
    domUpdates.clearGuessInput();
  };

  newRound() {
    domUpdates.resetRoundScores();
    domUpdates.resetPuzzleBoard();
    domUpdates.resetLetters();
    puzzle.selectPuzzleBank(puzzleBankIndex);
    this.currentPlayer = player1;
    domUpdates.resetAvatar();
    domUpdates.displayPlayerTurn();
    domUpdates.highlightAvatarTurn();
    this.currentRound++;
    $('.value-display').text('');
  }

  createBonusRound() {
    round.currentRound = 5;
    domUpdates.resetRoundScores();
    domUpdates.resetPuzzleBoard();
    domUpdates.resetLetters();
    puzzle.selectPuzzleBank(puzzleBankIndex);
    domUpdates.displayBonusRoundInstructions();
    $('.value-display').text('');
   }
 }



if (typeof module !== 'undefined') {
  module.exports = Round;
}

