class Game {
	constructor(winner) {
		this.players = ['player 1', 'player 2', 'player 3'];
		this.rounds = ['round 1', 'round 2', 'round 3', 'round 4'];
		this.winner = winner;
	}

	startRound1() {
		
	}

	resetGame() {

	}
	
	quitGame() {

	}
}

if (typeof module !== 'undefined') {
	module.exports = Game;
}