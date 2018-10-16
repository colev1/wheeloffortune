const chai = require('chai');
const expect = chai.expect;
const Player = require('../Player.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../domUpdates.js');
chai.spy.on(global.domUpdates, [], () => true);

describe ('Player', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  })

  it('should increment the players round score when the round is over', function() {
    player.incrementRoundScore();
    expect.equal(player.incrementRoundScore, 200);
  })

  it('should add up total score at the end of the game', function() {
    player.cumulateTotalScore();
    expect.equal(player.cumulateTotalScore, 1000);
  })

  it('should bankrupt the player when they land on that value', function() {
    player.scoreBankrupt();
    expect.equal(player.scoreBankrupt, 0);
  })
})

