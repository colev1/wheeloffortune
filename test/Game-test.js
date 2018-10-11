const chai = require('chai');
const expect = chai.expect;
const Game = require('../game.js');
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

  it('should have 4 rounds', function() {
    expect(game.rounds.length).to.equal(4);
  });

  it('should start round 1', function() {
    
  })
})