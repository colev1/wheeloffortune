class BonusRound {
  constructor (winner) {
    this.player = winner.name;
    this.playerGrandTotal = winner.totalScore;
    this.wheelValue = 0;
  };

  newRound() {
    //display message that winner is winner
    //spin wheel once
    this.wheelValue = wheel.spinNewWheel();
  };

  
}

if (typeof module !== 'undefined') {
  module.exports = BonusRound;
}