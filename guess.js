var number = Math.floor(Math.random()*101);
var guesses = 0;

$('form').on('submit', function(event) {
  event.preventDefault();

  var guess = $('#guess').val();


  if (parseInt(guess) === number) {
    console.log("Congratulations, you've guessed the number in " + guesses + " guesses!");
    guesses = 0;
  } else if (parseInt(guess) < number) {
    console.log(guess + ' was too low, try again...');
    guesses++;
  } else {
    console.log(guess + ' was too high, try again...')
    guesses++
  }
});





