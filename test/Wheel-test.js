const chai = require('chai');
const expect = chai.expect;
const Wheel = require('../Wheel.js');
const spies = require('chai-spies');
chai.use(spies);

global.domUpdates = require('../domUpdates.js');
chai.spy.on(global.domUpdates, [], () => true);

describe ('Wheel', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should have a default for the current values', function() {
    expect(value.currentValue).to.equal([0]);
  });

  it('should be able to generate new values for each round', function() {
    wheel.new Wheel(8);
  });

  it('should spin', function() {
    wheel.spin()
  });
})