var number = Math.floor(Math.random()*101);
var guesses = 0;

$('form#game').on('submit', function(event) {
  event.preventDefault();

  var guessNum = $('#guess').val();

  if (parseInt(guessNum) >= 0 && parseInt(guessNum) <= 100) {
  $('body').append('<li>' + guessNum + '</li>');
  }

  if (parseInt(guessNum) === number) {
    guesses++;
    $('p').html("Congratulations, you've guessed the number in " + guesses + " guesses!");
    $('form#game').remove();
    $('body').append('<br><form id="restart"><input type="submit" value="play again!"/></form>');
  } else if (parseInt(guessNum) < number && parseInt(guessNum) >= 0) {
    $('p').html(guessNum + ' was too low, try again...');
    guesses++;
  } else if (parseInt(guessNum) > number && parseInt(guessNum) <= 100) {
    $('p').html(guessNum + ' was too high, try again...');
    guesses++;
  } else {
    $('p').html('Invalid input, must enter a number between 0 and 100');
  }

});





