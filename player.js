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
    this.totalScore += player.roundScore;
  }

  scoreBankrupt() {
  	this.roundScore = 0;
    this.displayRoundScore();
  }

  displayRoundScore() {
    // know in this function, which player scored
    // player-1, player-2, player-3

    // article player-${this.name} interpolate

    // this.name = 1|2|3
    $('.round-money').text('$ ' + this.roundScore);
  }

}

 if (typeof module !== 'undefined') {
	module.exports = Player;
}


