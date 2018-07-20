function Letter(inLtr) {
    this.incomingLetter = inLtr;
    this.wasTheLetterGuessed = false;
    this.isMatch = function () {

        // A function that returns the underlying character if the letter has been guessed, or a placeholder (like
        // an underscore) if the letter has not been guessed
        // this.inOutLetter = inOutLetter;

        if (this.wasTheLetterGuessed) {
            // this.wasTheLetterGuessed = true;
            return this.incomingLetter;
        } else {
            // this.wasTheLetterGuessed = false;
            return "-";
        }

        // console.log('$$$ in the isMatch function $$$');
        // return 'ok';
    };

    this.changeGuessState = function (inOutLetter) {
        // A function that takes a character as an argument and checks it against the underlying character,
        // updating the stored boolean value to true if it was guessed correctly

        if (this.incomingLetter === inOutLetter) {
            this.wasTheLetterGuessed = true;
        }
            // } else {
        //     this.wasTheLetterGuessed = false;
        // }


        // console.log('&&& inside the changeGuessState function &&&' + this.wasTheLetterGuessed);
        // return 'ko';
    };
};

module.exports = Letter;