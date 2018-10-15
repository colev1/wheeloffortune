class Round {
	constructor(currentRound, puzzle, winner) {
		this.currentRound = currentRound || 1;
    this.puzzle = puzzle;	
    this.winner = winner || '';
    this.currentPlayer = currentPlayer || player1
	}
  
  declareWinner() {
    
    return this.winner;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Round;
}

