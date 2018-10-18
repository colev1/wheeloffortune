class Player {
	constructor(name, totalScore) {
		this.name = name;
		this.roundScore = 0; 
		this.totalScore = 0;
	}
	
	incrementRoundScore(roundScore) {
		this.roundScore += roundScore;
    domUpdates.displayRoundScore();
	}

  decreaseRoundScore() {
    this.roundScore -= 100;
    domUpdates.displayRoundScore();
  }

	cumulateTotalScore(roundScore) {
    this.totalScore += roundScore;
    domUpdates.displayTotalScore();
  }

  scoreBankrupt() {
  	this.roundScore = 0;
    domUpdates.displayRoundScore();
  }
}

 if (typeof module !== 'undefined') {
	module.exports = Player;
}


