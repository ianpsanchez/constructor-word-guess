var Letter = require("./letter.js");
var inquirer = require("inquirer");

var asdf = new Letter();

console.log(asdf.incomingLetter);

asdf.incomingLetter = 'f';

// var efg = asdf.isMatch();

console.log(asdf.changeGuessState('f'));

console.log(asdf.isMatch('f'));

console.log(asdf);

console.log('AFTER THE ASSIGNMENT:  ' + asdf.incomingLetter);