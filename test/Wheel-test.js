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

  it('should have a default for the current wheel values', function() {
    wheel = new Wheel;
    expect(wheel.wheelElements).to.eql([]);
  });

  it('should be able to generate new values for each round', function() {
    wheel = new Wheel();
    wheel.generateWheelValues();
    expect(wheel.wheel).to.eql()
  });

  it('should generate a bonus wheel', function() {
    wheel = new Wheel();
    wheel.generateBonusWheel();
    expect(wheel.wheelElements[2]).to.equal(15000);
  });
})