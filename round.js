class Round {
	constructor(currentRound, puzzle, winner) {
		this.currentRound = currentRound || 1;
    this.puzzle = puzzle;	
    this.winner = winner || '';
	}
  declareWinner() {
    //how can we connect different classes when writing out methods
    return this.winner;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Round;
}

//can just make one round instance with methods that change its properties