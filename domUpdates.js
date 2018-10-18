const domUpdates = {
  
  hideWelcomeMessage(event) {
    event.preventDefault();
    $('.welcome-message').hide();
  },

  displayPuzzleCategory() {
    $('.category-display').text(puzzle.category);
  },

  checkLetter(event) {
    let letter = event.target.id;
    $(event.target).addClass('chosen-letter');
    $(event.target).prop('disabled', true);
    var tiles = $('.game-board-box');
    for (var i = 0; i < puzzle.answer.length; i++) {
      if (puzzle.answer.charAt(i) === letter) {
        $(tiles[i]).addClass('correct-letter');
        $(tiles[i]).text(letter.toUpperCase());
        if ($(event.target).hasClass('consonant')) { 
          round.currentPlayer.incrementRoundScore(wheel.currentWheelElement);
        }
      }
    }
    if ($(event.target).hasClass('vowel')) {  
      round.currentPlayer.decreaseRoundScore();
    } else {
    }
    if (round.currentRound !== 5) {
      round.changePlayer();
      domUpdates.highlightCurrentPlayerTurn(); 
      domUpdates.displayCurrentPlayerTurn();
      domUpdates.disableVowels();
      domUpdates.disableConsonants();
    }
  },

  displaySolveInput(event) {
    event.preventDefault();
    $('.solve-button-form').removeClass('hidden');
  },

  displayPuzzleBoard() {
    var tiles = $('.game-board-box');
    for (var i = 0; i < puzzle.answer.length; i++) {
      if (puzzle.answer.charAt(i) !== ' ') {
        $(tiles[i]).addClass('greyed');
      }
    }
  },

  resetPuzzleBoard() {
    var tiles = $('.game-board-box');
    for (var i = 0; i < puzzle.answer.length; i++) {
      // if (puzzle.answer.charAt(i) !== ' ') {
      $(tiles[i]).removeClass('greyed');
      $(tiles[i]).text('');
    }
  },

  enablePlayerButtons() {
    $('.button').prop('disabled', false);
  },

  disablePlayerButtons() {
    $('.button').prop('disabled', true);
  },

  enableSolveButton() {
    if ($('.solve-input').val() === '') {
      $('.submit-guess-button').prop('disabled', true);
    } else {
      $('.submit-guess-button').prop('disabled', false);
    }
  },

  displayPlayerTurn() {
    $('.player-turn-display').text('PLAYER 1...YOUR TURN!');
  },

  highlightAvatarTurn() {
    $('.avatar1').addClass('highlight-avatar');
  },

  disableVowels() {
    let vowels = $('.vowel');
    vowels.prop('disabled', true);
    let consonants = $('.consonant');
    consonants.prop('disabled', false);
  },

  enableVowels() {
    let vowels = $('.vowel');
    vowels.prop('disabled', false);
    let consonants = $('.consonant');
    consonants.prop('disabled', true);
  },

  enableBothVowelsConsonants() {
    let consonants = $('.consonant');
    consonants.prop('disabled', false);
    let vowels = $('.vowel');
    vowels.prop('disabled', false);
  },

  resetLetters() {
    $('.letters').removeClass('chosen-letter');
  },

  disableConsonants() {
    let consonants = $('.consonant');
    consonants.prop('disabled', true);
  },

  resetRoundScores() {
    round.players.map((player) => {
      player.roundScore = 0;
      $(`.round-money-${player.name}`).text('$ ' + player.roundScore);
    })
  },

  resetTotalScore() {
    round.players.map((player) => {
      player.totalScore = 0;
      $(`.total-score-${player.name}`).text('TOTAL BANK: $ ' + player.totalScore);
    })
  },

  clearSpinValueDisplay() {
    $('.value-display').text('');
  },

  clearGuessInput() {
    $('.solve-input').val('');
  },
  
  displayBonusRoundInstructions(winningPlayer) {
    let bonusRoundPopup = $('.bonus-round-popup');
    bonusRoundPopup.removeClass('hidden');
    $('.bonus-round-head').text(`BONUS ROUND: PLAYER ${winningPlayer.name} SPIN THE BONUS WHEEL!!!!`)
    setTimeout(() => {
      bonusRoundPopup.addClass('hidden');
      $('.player-turn-display').text('Pick 1 vowel and 3 consonants then solve the puzzle!');
    }, 5000);
  },

  hideNonWinningPlayers(winningPlayer) {
    $('.1').addClass('hidden');
    $('.2').addClass('hidden');
    $('.3').addClass('hidden');
    $(`.${winningPlayer.name}`).removeClass('hidden');
  },

  displayGameWinner() {
    setTimeout(() => {
      let bonusRoundPopup = $('.bonus-round-popup');
      bonusRoundPopup.removeClass('hidden');
      if (typeof wheel.currentWheelElement === 'number') {
        let newTotalScore = winningPlayer.totalScore + wheel.currentWheelElement;
        $('.bonus-round-head').text(`CONGRATS PLAYER ${winningPlayer.name}, YOU WON $${newTotalScore}`);
      } else {
        $('.bonus-round-head').text(`CONGRATS PLAYER ${winningPlayer.name}, YOU WON A ${wheel.currentWheelElement}`);
      }
    }, 1000);
  },

  displayGameLoser() {
    setTimeout(() => {
      let bonusRoundPopup = $('.bonus-round-popup');
      bonusRoundPopup.removeClass('hidden');
      $('.bonus-round-head').text(`SORRY PLAYER ${winningPlayer.name}, YOU'RE WRONG! GAME OVER. YOU STILL WIN $${winningPlayer.totalScore}`);
    }, 1000);
  },

  displayRoundScore() {
    $(`.round-money-${round.currentPlayer.name}`).text('$ ' + round.currentPlayer.roundScore);
  },

  displayTotalScore() {
    $(`.total-score-${round.currentPlayer.name}`).text('Total Score $ ' + round.currentPlayer.totalScore);
  },

  displayCurrentPlayerTurn() {
    $('.player-turn-display').text(`Player ${round.currentPlayer.name}.. your turn!`);
  },

  highlightCurrentPlayerTurn() {
    $(`.avatar${round.previousPlayer.name}`).removeClass('highlight-avatar');
    $(`.avatar${round.currentPlayer.name}`).addClass('highlight-avatar');
  },

  resetAvatar() {
    $(`.avatar`).removeClass('highlight-avatar');
  },

  displayWheelValue() {
    $('.value-display').text('Spin Value: ' + wheel.currentWheelElement);
  }

}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}