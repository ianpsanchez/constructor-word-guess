var Letter = require("./letter.js");
var Word = require("./word.js");

// var ltr = new Letter();
var wrd = new Word();

var s = "overpopulation";

function popWord() {
    for (var i = 0; i < s.length; i++) {
        console.log(s.charAt(i));
        wrd.theWord.push(s.charAt(i));

    }
}

// ltr.incomingLetter = s.charAt(1);

popWord(s);

console.log(wrd.theWord);