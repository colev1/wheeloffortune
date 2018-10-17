class BonusRound {
  constructor (winner) {
    this.player = winner.name;
    this.playerGrandTotal = winner.totalScore;
  };

  newRound() {
    //display message that winner is winner
    //spin wheel once
    wheel.spinNewWheel();
  }
}

if (typeof module !== 'undefined') {
  module.exports = BonusRound;
}