"use strict";

var translateText = (function (origTranslateText) {
    var spanishWords = { "merry": "feliz", "christmas": "Navidad", "and": "y", "happy": "feliz", "new": "nuevo", "year": "año", "birthday": "cumpleaños", "Jesus": "Jesús", "God": "Dios", "you": "ti", "to": "a", "have": "tienes", "we": "nosotoros", "wish": "deseo", "baby": "niño"};


    origTranslateText.translateToSpanish = function (englishWord) {
        return spanishWords[englishWord];
    };

    return origTranslateText;


})(translateText);

console.log(translateText);