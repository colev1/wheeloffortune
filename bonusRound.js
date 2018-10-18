class BonusRound {
  constructor () {
    this.player = winningPlayer;
    this.wheelValue = 0;
  }

  newRound() {
    this.wheelValue = wheel.spinNewWheel();
  }
}

if (typeof module !== 'undefined') {
  module.exports = BonusRound;
}
