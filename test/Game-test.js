const chai = require('chai');
const expect = chai.expect;
const Game = require('../Game.js');
const Round = require('../Round.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../domUpdates.js');
chai.spy.on(global.domUpdates, [], () => true);


describe ('Game', function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should have a winner', function() {
    game = new Game('player 1');
    expect(game.winner).to.equal('player 1');
  });

  it('should have 3 players', function() {
    expect(game.players.length).to.equal(3);
  });

  it('should instantiate round 1', function() {
    // expect(round.round).to.equal('round 1');

    game.startGame();
    expect(round).to.exist();
  });

})