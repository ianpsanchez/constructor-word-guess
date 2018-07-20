var Word = require("./word.js");
var inquirer = require("inquirer");

var asdf = new Word("joker");

// var efg = asdf.isMatch();

console.log(asdf.wordString);
console.log(asdf.theWord[2].incomingLetter);

console.log('checkletters: -->  ' + asdf.checkLetter('r'));
console.log('current word: -->  ' + asdf.currentWord());

// console.log(asdf.checkLetter());

// asdf.theWord.push('cat');
// asdf.theWord.push('aligator');
// asdf.theWord.push('stonefish');

// console.log(asdf.theWord[2]);

// // console.log(asdf.isMatch());

// console.log(asdf);