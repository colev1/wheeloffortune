const chai = require('chai');
const expect = chai.expect;
const Game = require('../game.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../domUpdates.js');
chai.spy.on(global.domUpdates, [], () => true);



describe ('Game', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  })
})