class BonusRound {
  constructor () {
    this.player = winningPlayer;
    // this.playerGrandTotal = winningPlayer.totalScore;
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