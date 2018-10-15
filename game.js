class Game {
	constructor(winner, round) {
		this.players = ['player 1', 'player 2', 'player 3'];
		this.winner = winner;
		this.round = round;
	}

	startGame() {
		//when the start game button is clicked, we want to create an instance of round where currentRound is 1
		// return round = new Round();
		
		}

		selectPuzzleBank(puzzleBankIndex) {
  		puzzle.generateNewPuzzle(puzzleBankIndex);
  		domUpdates.displayPuzzleCategory();
  		domUpdates.displayPuzzleBoard();
		}
	};



// 	// startGame() {
// 	// 	console.log(start);
// 	// 	return ;

// 	// }

// 	resetGame() {

// 	}
	
// 	quitGame() {

// 	}
// }


if (typeof module !== 'undefined') {
	module.exports = Game;
}

