const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
const min = 0
const max = 25
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
app.get('/numbersGame', (req, res )=> {
  console.log('in /numbersGame');
  res.send(Math.floor(Math.random()*(max-min+1)+min).toString());
});


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
// CODE FOR OUR RNG
// Math.floor(Math.random()*(max-min+1)+min)