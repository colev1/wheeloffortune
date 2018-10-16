class Round {
	constructor(player1, player2, player3, currentRound) {
		this.currentRound = currentRound || 1;	
    this.players = [player1, player2, player3];
    this.currentPlayer = player1;
    this.counter = 0
  }

  changePlayer() {
    this.counter++;
    if (!this.players[this.counter]) {
      this.counter = 0;
      this.currentPlayer = this.players[this.counter]
    } else {
      this.currentPlayer = this.players[this.counter]
    }
  };

  displayCurrentPlayerTurn() {
    $('.player-turn-display').text(`Player ${round.currentPlayer.name}.. your turn!`);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Round;
}

