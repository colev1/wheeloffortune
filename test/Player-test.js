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
})