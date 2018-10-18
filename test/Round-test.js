const chai = require('chai');
const expect = chai.expect;
const Round = require('../Round.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../domUpdates.js');
chai.spy.on(global.domUpdates, [], () => true);

describe ('Round', function() {
  var round;
  beforeEach(function() {
    round = new Round();
  });

  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should have a default of round 1', function() {
    expect(round.currentRound).to.equal(1);
  });

  // it('should change players', function() {
  //   round = new Round(player1, player2, player3, 2);
  //   var player1;
  //   var player2;
  //   var player3;
  //   expect(round.currentPlayer).to.equal(player1);
  //   round.changePlayer();
  //   expect(round.currentPlayer).to.equal(player2);
  // });

})

