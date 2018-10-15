class Player {
	constructor(name, grandTotal) {
		this.name = name;
		this.roundScore = 0;
		this.totalScore = 0;
		this.isTurn = false;
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

	takeTurn() {
		this.isTurn = true;
	}
  //recommend moving through turns lives in
  //Game or Round class

}

 if (typeof module !== 'undefined') {
	module.exports = Player;
}


//want to create an id on each player, so we can target htem and give them a class of active when it is their turn 
//add the id to the player if it is their turn