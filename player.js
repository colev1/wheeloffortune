class Player {
	constructor(name, totalScore) {
		this.name = name;
		this.roundScore = 0;
		this.totalScore = 0;
	}
	
	incrementRoundScore(roundScore) {
		this.roundScore += roundScore;
	}

	cumulateTotalScore(roundScore) {
    this.totalScore += player.roundScore;
  }

  scoreBankrupt() {
  	this.roundScore = 0;
  }

}

 if (typeof module !== 'undefined') {
	module.exports = Player;
}


