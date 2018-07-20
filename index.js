var inquirer = require("inquirer");
var Word = require("./word.js");

var s = 'tupperware';
var wrd = new Word(s);

// Create a "Prompt" with a series of questions.
function playGame() {
  inquirer
    .prompt([
      // Here we create a basic text prompt.
      {
        type: "input",
        message: "Guess a letter --> ",
        name: "guess"
      }
    ])
    .then(function (inquirerResponse) {

      wrd.checkLetter(inquirerResponse.guess);

      console.log(wrd.currentWord());

      var g = checkIfWinner();

      if(g){
        console.log('WINNER');
      }else{
        playGame();
      }
      

    });
}

function checkIfWinner() {

  var anyFalse = 0;

  for(var i = 0; i < wrd.theWord.length; i++){
      if(!wrd.theWord[i].wasTheLetterGuessed){
        anyFalse++;
      }
  }

  if(anyFalse === 0) {
    return true;
  }
}

playGame();