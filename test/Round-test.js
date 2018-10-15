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

  it('should be able to take currentRound as a parameter', function() {
    round = new Round(2, 'The 90s', 'Disco');
    expect(round).to.eql({currentRound: 2});
  });

  // it('should have a winner', function() {
  //   round = new Round(2, 'Libby');
  //   expect(round.winner).to.equal('Libby');
  // });

  it('should have a default of player1 at the beginning of each round')
  expect(round.currentPlayer).to.equal(player1);
  });