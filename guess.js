var number = Math.floor(Math.random()*101)

$('form').on('submit', function(event) {
  event.preventDefault();

  var guessNum = $('#guess').val();

  alert('You typed in ' + guessNum);
});





