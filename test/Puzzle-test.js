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
    puzzle = new Puzzle(1, 'phrase', 'Phrase');
    expect(puzzle.category).to.eql('phrase');
  })

  it('should be able to generate a new puzzle using the puzzle bank index', function() {
    puzzle.generateNewPuzzle(3);
    expect(selectedPuzzle).to.exist();
  });

  describe ('Puzzle method generate new puzzle', function() {

    beforeEach(function () {
      puzzle.generateNewPuzzle();
    });

    it('should assign category, letters, answer, num words properties to puzzle', function() {
      expect(puzzle.category).to.exist;
      expect(puzzle.letters).to.exist;
    });
  });
})