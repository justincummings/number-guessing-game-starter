$(document).ready(handleReady);
let randomNumber = 0;
function handleReady() {
  console.log("jquery is loaded!");
  askForRandomNumber();
  $('#submit-guess').on('click', collectInputs);
  $('#reset-button').on('click', resetHandler);
}

let guessCounter = 0;

// Collect Inputs Function
function collectInputs () {

  // Capture inputs in variables
  let justinGuess = { guess :$('#justin-input').val(), name: 'justin'};
  let zaneGuess = { guess :$('#zane-input').val(), name: 'zane'};
  let sparkyGuess = { guess :$('#sparky-input').val(), name: 'sparky'};

  console.log('Justins Guess:', justinGuess);
  console.log('Zanes Guess:', zaneGuess);
  console.log('Sparkys Guess:', sparkyGuess);

  // Build array of guesses
  let guessesArray = [ justinGuess, zaneGuess, sparkyGuess ];

  // Iterate through guessArray and check for matches
  for (guess of guessesArray){

    if (Number(guess.guess) === Number(randomNumber)){
      alert(`${guess.name} has won!`); 
    } 
    else if(Number(guess.guess) > Number(randomNumber)){
      console.log(`in greater than else if- Guess: ${guess.guess} Number from Server: ${randomNumber}`);
      $(`#${guess.name}-last-guess`).empty();
      $(`#${guess.name}-last-guess`).append('was too high!');
    } 
    else if(Number(guess.guess) < Number(randomNumber)){
      console.log(`In less than else if- Guess: ${guess.guess} Number from Server: ${randomNumber}`);
      $(`#${guess.name}-last-guess`).empty();
      $(`#${guess.name}-last-guess`).append('was too low!');
    }

    // Clear input fields
    $('#justin-input').val('');
    $('#zane-input').val('');
    $('#sparky-input').val('');

    guessCounter ++;

  }
}



  function resetHandler () {
    $(`#justin-last-guess`).empty();
    $(`#zane-last-guess`).empty();
    $(`#sparky-last-guess`).empty();
    askForRandomNumber();
    guessCounter=0;
  }


  


function askForRandomNumber() {
  $.ajax({
    method: 'GET',
    url: '/numbersGame'
  }).then((response) => {
    randomNumber = response;
    console.log(randomNumber);
    console.log('response', response);
  }).catch((error) => {
    console.log('error', error);
  })
}