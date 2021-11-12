const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const min = 0
const max = 25
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));

let randomNumber = (Math.floor(Math.random()*(max-min+1)+min).toString());

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.get('/numbersGame', (req, res )=> {
  console.log('in /numbersGame');
});

// POST ROUTE
app.post('/numbersGame', (req, res) => {
  console.log('in POST /numbersGame');
  // Do a console.log to ensure our req.body data is something like:
    // {guess: 'xxx', name: 'yyy'}
  console.log('req.body', req.body);
  //for loop checks the guesses and captures results
  let guessObject = req.body;
  console.log(guess);
  // for (guess of guessesArray){

  if (Number(guessObject.guess) === Number(randomNumber)){
      guess.results = 'correct';
    } 
    else if(Number(guessObject.guess) > Number(randomNumber)){
      guess.results = 'was too high';
    } 
    else if(Number(guessObject.guess) < Number(randomNumber)){
      guess.result = 'was too low';
    }

 // }
});






app.listen(PORT, () => {
  console.log ('Server is running on port', PORT);
})
// CODE FOR OUR RNG
// Math.floor(Math.random()*(max-min+1)+min)
