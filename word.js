var Letter = require("./letter.js");



function Word(wordString) {
    this.wordString = wordString;
    this.theWord = [];

    for (var i = 0; i < this.wordString.length; i++) {
        // console.log(s.charAt(i));

        this.theWord.push(new Letter(this.wordString.charAt(i)));

    }

    this.currentWord = function () {

        // A function that returns a string representing the word. This should call the function on each letter
        // object (the first function defined in Letter.js) that displays the character or an underscore and
        // concatenate those together
        // console.log('in word constructor:  ' + this.theWord[0].incomingLetter);
        // return t;

        // var theLetters = Letter();
        // console.log(theLetters);
        // console.log('inside currentWord function ++++++++++++++');

        var u = "";
        for (var i = 0; i < this.theWord.length; i++) {
            u += this.theWord[i].isMatch();
        }

        // return 'done!!!';
        // return this.theWord[0].incomingLetter;
        return u;
    };
    this.checkLetter = function (ch) {
        // A function that takes a character as an argument and calls the guess function on each letter object
        //(the second function defined in Letter.js)
        // this.theWord[0];
        for (var i = 0; i < this.theWord.length; i++) {
            this.theWord[i].changeGuessState(ch);
        }

        //   console.log('inside CHECKLETTER function {}{}{}{}{}{}{}{}{}');
    };
};

module.exports = Word;