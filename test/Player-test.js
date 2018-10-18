const chai = require('chai');
const expect = chai.expect;
const Player = require('../Player.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../domUpdates.js');
chai.spy.on(global.domUpdates, ['displayTotalScore', 'displayRoundScore'], () => true);

describe ('Player', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should have a name', function() {
    player = new Player('Libby');
    expect(player.name).to.equal('Libby');
  })

  it('should increment the players round score when the round is over', function() {
    player = new Player('Libby');
    player.incrementRoundScore();
    expect(player.roundScore).to.equal(200);
  })

  it('should add up total score at the end of the game', function() {
    player.cumulateTotalScore();
    expect(player.cumulateTotalScore).to.equal(1000);
  })

  it('should bankrupt the player', function() {
    player.scoreBankrupt();
    expect.equal(player.scoreBankrupt, 0);
  })
})

