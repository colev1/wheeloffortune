class Player {
	constructor(name, grandTotal) {
		this.name = name;
		this.roundScore = 0;
		// this.totalScore = totalScore;
		this.isTurn = false;
	}
	

	incrementRoundScore(addedScore) {
		
		player.roundScore += addedScore;
	}

	cumulateScore(roundScore) {
    //if player === winner, then add their score to total score
    //reset all round scores to 0
    player.totalScore += player.roundScore;
  }

	activateWheel() {

	}

	buyVowel() {

		//change player.isTurn = false;
	}
		
	selectConsonant(consonant) {
	

		//change player.isTurn = false;
		//create a check consonant function on the puzzle to return true or false

		//if puzzle.checkconsonant === true , then do something

	}

	solvePuzzle() {

		//change player.isTurn = false;
		}
	startTurn() {
		this.isTurn = true;
	}
 }

 if (typeof module !== 'undefined') {
	module.exports = Player;
}


//want to create an id on each player, so we can target htem and give them a class of active when it is their turn 
//add the id to the player if it is their turn