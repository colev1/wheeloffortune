const chai = require('chai');
const expect = chai.expect;
const Puzzle = require('../puzzle.js');
const spies = require('chai-spies');
const Data = require('../data-set.js');
chai.use(spies);

global.domUpdates = require('../domUpdates.js');
chai.spy.on(global.domUpdates, [], () => true);


describe ('Puzzle', function() {
  var puzzle;
  beforeEach(function() {
    puzzle = new Puzzle();
  });

  it('should return true', function() {
    expect(true).to.equal(true);
  })

  it('should take in a key index property and category property', function() {
    puzzle = new Puzzle(2, 'Phrase');
    expect(puzzle).to.eql({puzzleBankIndex: 2,category: 'Phrase'});
  })

  it('should be able to generate a new puzzle using the puzzle bank index', function() {
  
    puzzle.generateNewPuzzle();
    // expect(puzzle.category).to.not.equal('');
    expect(selectedPuzzle).to.exist();
  });

  it('should assign a category to puzzle once generate puzzle is invoked', function() {
    puzzle.generateNewPuzzle();
    expect(this.category).to.equal(selectedPuzzle.category);
  });
})