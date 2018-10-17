class Player {
	constructor(name, totalScore) {
		this.name = name;
		this.roundScore = 0; // todo: collection for keeping scores of all rounds [0, 12, 4]
		this.totalScore = 0;
	}
	
	incrementRoundScore(roundScore) {
		this.roundScore += roundScore;
    this.displayRoundScore();
	}

	cumulateTotalScore(roundScore) {
    this.totalScore += roundScore;
    this.displayTotalScore();
  }

  scoreBankrupt() {
  	this.roundScore = 0;
    this.displayRoundScore();
  }

  displayRoundScore() {
    $(`.round-money-${round.currentPlayer.name}`).text('$ ' + this.roundScore);
  }

  displayTotalScore() {
    $(`.total-score-${round.currentPlayer.name}`).text('Total Score $ ' + this.totalScore);
  }
   
}

 if (typeof module !== 'undefined') {
	module.exports = Player;
}


