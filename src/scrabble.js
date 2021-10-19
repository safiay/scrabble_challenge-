let letters = {
    ' ': 0,
    "a": 1,
    "c": 3,
    "b": 3,
    "e": 1,
    "d": 2,
    "g": 2,
    "f": 4,
    "i": 1,
    "h": 4,
    "k": 5,
    "j": 8,
    "m": 3,
    "l": 1,
    "o": 1,
    "n": 1,
    "q": 10,
    "p": 3,
    "s": 1,
    "r": 1,
    "u": 1,
    "t": 1,
    "w": 4,
    "v": 4,
    "y": 4,
    "x": 8,
    "z": 10
};
class Scrabble {
    constructor(word) {
        this.word = word
    }
    score() {
        let sum = 0
        if (this.word === " \t\n") {
            return 0
        }
        if (this.word === ' ') {
            return 0
        }
        if (this.word === null) {
            return 0
        }
        let newWord = this.word.toLowerCase()

        for (let i = 0; i < newWord.length; i++) {

            let counter = letters[newWord[i]]
            sum = sum + counter
        }
        return sum

    }
}






module.exports = Scrabble
  // class is blueprint for object you can make different instances of class
  // constructor holds the variables of the class including name, or things you'll use multiple times throughout class
  // functions and methods always have brackets () always open a curly brace after this