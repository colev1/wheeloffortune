class Player {
	constructor(name, totalScore) {
		this.name = name;
		this.roundScore = 0;
		this.totalScore = 0;
	}
	
	incrementRoundScore(roundScore) {
		this.roundScore += roundScore;
    player.displayRoundScore();
	}

	cumulateTotalScore(roundScore) {
    this.totalScore += player.roundScore;
  }

  scoreBankrupt() {
  	this.roundScore = 0;
  }

  displayRoundScore() {
     $('.round-money').text('$ ' + wheel.currentWheelElement);
    }

}

 if (typeof module !== 'undefined') {
	module.exports = Player;
}


