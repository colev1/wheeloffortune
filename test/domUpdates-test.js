const chai = require('chai');
const expect = chai.expect;

const spies = require('chai-spies');
chai.use(spies);
global.domUpdates = require('../domUpdates.js');
chai.spy.on(global.domUpdates, ['hideWelcomeMessage', 'displayPuzzleCategory', 'checkLetter', 'displaySolveInput', 'displayPuzzleBoard', 'enablePlayerButtons', 'disablePlayerButtons', 'enableSolveButton'], () => true);

describe ('domUpdates', function() {
  
  it ('should hide welcome message', function() {
    expect(domUpdates.hideWelcomeMessage()).to.have.been.called(1);
  });

  it ('should display puzzle category', function() {
    expect(domUpdates.displayPuzzleCategory()).to.have.been.called(1);
  });


  it ('should check letter', function() {
    expect(domUpdates.displayPuzzleCategory()).to.have.been.called(1);
  });

  it ('should display solve input', function() {
    expect(domUpdates.displaySolveInput()).to.have.been.called(1);
  });

  it ('should display puzzle board', function() {
    expect(domUpdates.displayPuzzleBoard()).to.have.been.called(1);
  });

  it ('should enable player buttons', function() {
    expect(domUpdates.enablePlayerButtons()).to.have.been.called(1);
  });

  it ('should disable player buttons', function () {
    expect(domUpdates.disablePlayerButtons()).to.have.been.called(1);
  });

  it ('should enable solve button', function() {
    expect(domUpdates.enableSolveButton()).to.have.been.called(1);
  });
});