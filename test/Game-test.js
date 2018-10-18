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

})