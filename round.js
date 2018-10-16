class Round {
	constructor(player1, player2, player3, currentRound) {
		this.currentRound = currentRound || 1;	
    this.players = [player1, player2, player3];
    this.currentPlayer = player1;
    this.counter = 0
  }

  changePlayer() {
    this.counter++;
    // console.log('hi');
    if (!this.players[this.counter]) {
      this.counter = 0;
      this.currentPlayer = this.players[this.counter]
    } else {
      this.currentPlayer = this.players[this.counter]
    }
    console.log(this.currentPlayer);
  }
  

}

if (typeof module !== 'undefined') {
  module.exports = Round;
}

